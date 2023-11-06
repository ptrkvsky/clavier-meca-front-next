interface Props {
  jsonLd: Record<string, any>;
}

export function ScriptJsonLD({ jsonLd }: Readonly<Props>) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
