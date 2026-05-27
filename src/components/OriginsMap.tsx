"use client";

import { useEffect } from "react";
import Link from "next/link";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { products } from "@/data/products";
import { useI18n } from "@/lib/i18n";

function fixDefaultIcon() {
  delete (L.Icon.Default.prototype as unknown as { _getIconUrl?: unknown })._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  });
}

export default function OriginsMap() {
  const { locale, fmtPrice } = useI18n();

  useEffect(() => {
    fixDefaultIcon();
  }, []);

  // Group products by country+region+coords to avoid overlapping pins
  const groups = new Map<string, { lat: number; lng: number; label: string; items: typeof products }>();
  for (const p of products) {
    const key = `${p.country.code}-${p.region[locale]}`;
    if (!groups.has(key)) {
      groups.set(key, {
        lat: p.country.lat,
        lng: p.country.lng,
        label: `${p.country[locale]} — ${p.region[locale]}`,
        items: [],
      });
    }
    groups.get(key)!.items.push(p);
  }

  return (
    <MapContainer
      center={[20, 0]}
      zoom={2}
      scrollWheelZoom
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />
      {Array.from(groups.values()).map((g, i) => (
        <Marker key={i} position={[g.lat, g.lng]}>
          <Popup>
            <div className="min-w-[200px]">
              <p className="mb-2 font-bold text-amber-400">{g.label}</p>
              <ul className="space-y-1">
                {g.items.map((p) => (
                  <li key={p.id} className="text-sm">
                    <Link
                      href={`/producto/${p.slug}`}
                      className="text-neutral-100 hover:text-amber-400"
                    >
                      • {p.name}{" "}
                      <span className="text-xs text-neutral-400">{fmtPrice(p.priceArs)}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
