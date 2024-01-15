import Link from "next/link";
import { formatDate } from "@/libs/functions";
import { MainContext, useContext } from "@/app/context";
import { getContrastYIQ } from "@/libs/functions";
import ClipboardButton from "react-clipboard.js";

export default function Brand({ brand, detailPage = '' }) {
    const { selectedBrands, setSelectedBrands, setCopied } = useContext(MainContext);

    const toggleSelected = () => {
        if (selectedBrands.includes(brand.slug)) {
            setSelectedBrands(selectedBrands.filter(slug => slug !== brand.slug));
        } else {
            setSelectedBrands([...selectedBrands, brand.slug]);
        }
    }

    let brandClass = selectedBrands.find(b => b === brand.slug) ? 'selected' : '';
    brandClass = detailPage ? `detail` : brandClass;

    return (
        <div className={`brand ${brandClass}`}>
            <div className="title" onClick={toggleSelected}>{brand.title}</div>
            {brand.colors && (
                <div className="colors">
                    {brand.colors.map((color, index) => (
                        <ClipboardButton
                            key={index}
                            component="span"
                            className={`text-${getContrastYIQ(color)}`}
                            data-title={brand.title}
                            data-text={color}
                            style={{ 'backgroundColor': `#${color}` }}
                            data-clipboard-text={`#${color}`}
                            onSuccess={() => setCopied(`#${color}`)}
                        >#{color}</ClipboardButton>
                    ))}
                </div>
            )}
            <div className="meta">
                <div className="date">Updated {formatDate(brand.modified, 1, '/')}</div>
                {brand.brand_url && (
                    <div className="site url">
                        <Link href={brand.brand_url} target="_blank">Brand URL</Link>
                    </div>
                )}
                {brand.source_url && (
                    <div className="source url">
                        <Link href={brand.source_url} target="_blank">Source URL</Link>
                    </div>
                )}
                <div className="link url">
                    <Link href={`/brand/${brand.slug}`}>Permalink</Link>
                </div>
            </div>
        </div>
    )
}
