import json
from urllib.parse import urljoin

import requests
from bs4 import BeautifulSoup


HEADERS = {"User-Agent": "Mozilla/5.0 (compatible; payment-research/1.0)"}


def soup_for(url):
    response = requests.get(url, headers=HEADERS, timeout=30)
    response.raise_for_status()
    return response.url, BeautifulSoup(response.text, "html.parser")


def context(text, needle, radius=400):
    normalized = " ".join(text.split())
    position = normalized.lower().find(needle.lower())
    if position < 0:
        return None
    return normalized[max(0, position - radius) : position + len(needle) + radius]


results = {}

stripe_url, stripe_soup = soup_for("https://stripe.com/global")
stripe_text = stripe_soup.get_text(" ", strip=True)
results["stripe"] = {
    "url": stripe_url,
    "indonesia_context": context(stripe_text, "Indonesia", 700),
}

for name, url in {
    "midtrans": "https://midtrans.com",
    "doku": "https://developers.doku.com",
}.items():
    final_url, soup = soup_for(url)
    links = []
    for anchor in soup.find_all("a", href=True):
        label = " ".join(anchor.get_text(" ", strip=True).split())
        href = urljoin(final_url, anchor["href"])
        candidate = f"{label} {href}".lower()
        if any(term in candidate for term in ("credit card", "cards", "international", "payment method")):
            links.append({"label": label, "url": href})
    results[name] = {"url": final_url, "links": links[:40]}

paypal_url, paypal_soup = soup_for("https://www.paypal.com/id/business/paypal-business-fees")
paypal_text = paypal_soup.get_text(" ", strip=True)
results["paypal"] = {
    "url": paypal_url,
    "international_context": context(paypal_text, "Receiving international transactions", 700),
    "conversion_context": context(paypal_text, "Currency Conversions", 500),
}

print(json.dumps(results, ensure_ascii=True, indent=2))
