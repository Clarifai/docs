import React from 'react';
import ActualDocItem from '@theme/DocItem';
import styles from './styles.module.css';
import CustomFooter from '../CustomFooter';
import { FooterBanner } from '../FooterBanner';

const CustomDocItem = (props) => {
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

export default CustomDocItem;