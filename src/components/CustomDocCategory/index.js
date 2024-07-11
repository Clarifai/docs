import React from 'react';
import ActualDocItem from '@theme/DocCategoryGeneratedIndexPage';
import styles from '../CustomDocItem/styles.module.css';
import { bannerConfig } from '../../../banners.config';
import CustomFooter from '../CustomFooter';

const CustomDocCategory = (props) => {
    const currentPath = props.location.pathname
    return (
        <>
            <ActualDocItem {...props} />
            <div className={styles['custom_doc_item_footer']}>
                {
                    bannerConfig.primary.path.includes(currentPath) && (
                        <div className="banner-primary">
                            <p>{bannerConfig.primary.text}</p>
                            <a href={bannerConfig.primary.ctaLink} target="_blank">{bannerConfig.primary.ctaText}</a>
                        </div>
                    )
                }

                {
                    bannerConfig.secondary.path.includes(currentPath) && (
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
                    bannerConfig.tertiary.path.includes(currentPath) && (
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

                <CustomFooter />
            </div>
        </>
    )
}

export default CustomDocCategory;