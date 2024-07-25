import React from 'react';
import ActualDocItem from '@theme/DocCategoryGeneratedIndexPage';
import styles from '../CustomDocItem/styles.module.css';
import CustomFooter from '../CustomFooter';
import { FooterBanner } from '../FooterBanner';

const CustomDocCategory = (props) => {
    const currentPath = props.location.pathname
    return (
        <>
            <ActualDocItem {...props} />
            <div className={styles['custom_doc_item_footer']}>
                <FooterBanner  currentPath={ currentPath }/>
                <CustomFooter />
            </div>
        </>
    )
}

export default CustomDocCategory;