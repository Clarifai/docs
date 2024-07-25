import { minimatch } from 'minimatch';
import { bannerConfig } from '../../banners.config';

const matchBanner = (path) => {
    for (let bannerType of Object.keys(bannerConfig).reverse()) {
        if (bannerConfig[bannerType].path.some(pattern => minimatch(path, pattern))) {
            return bannerType;
        }
    }
    return null;
};

export const FooterBanner = ({ currentPath }) => {
    return (
        <>
                {
                    matchBanner(currentPath) === 'primary' && (
                        <div className="banner-primary">
                            <p>{bannerConfig.primary.text}</p>
                            <a href={bannerConfig.primary.ctaLink} target="_blank">{bannerConfig.primary.ctaText}</a>
                        </div>
                    )
                }

                {
                    matchBanner(currentPath) === 'secondary' && (
                        <div className="banner-secondary">
                            <h3 className="banner-header">
                                {bannerConfig.secondary.title}
                            </h3>
                            <p className="banner-content">
                                {bannerConfig.secondary.text}
                            </p>
                            <a href={bannerConfig.secondary.ctaLink} target="_blank" class="banner-cta">{bannerConfig.secondary.ctaText}</a>
                        </div>
                    )
                }

                {
                    matchBanner(currentPath) === 'tertiary' && (
                        <div className="banner-tertiary">
                            <h3 className="banner-header">
                                {bannerConfig.tertiary.title}
                            </h3>
                            <ol className="banner-content">
                                {
                                    bannerConfig.tertiary.textList.map((text, index) => (
                                        <li key={index}>{text}</li>
                                    ))
                                }
                            </ol>
                            <a href={bannerConfig.tertiary.ctaLink} target="_blank" class="banner-cta">{bannerConfig.tertiary.ctaText}</a>
                        </div>
                    )
                }
        </>
    )
}