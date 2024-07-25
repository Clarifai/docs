import React from 'react';
import {useThemeConfig} from '@docusaurus/theme-common';
import {useAnnouncementBar} from '@docusaurus/theme-common/internal';
import AnnouncementBarContent from '@theme/AnnouncementBar/Content';
import { useColorMode } from '@docusaurus/theme-common';
import AnnouncementBarCloseBtn from '../../icons/x-close.svg';
import AnnouncementBarCloseBtnDark from '../../icons/x-close.svg'
import styles from './styles.module.css';

export default function AnnouncementBar() {
  const { colorMode } = useColorMode();
  const {announcementBar} = useThemeConfig();
  const {isActive, close} = useAnnouncementBar();
  if (!isActive) {
    return null;
  }
  const { isCloseable } = announcementBar;
  return (
    <div className={styles.announcementWrapper}>
      <div
        className={styles.announcementBar}
        role="banner">
        {isCloseable && <div className={styles.announcementBarPlaceholder} />}
        {isCloseable && (
          <div
            onClick={close}
            className={styles.announcementBarClose}
          >
            { colorMode === 'dark' ? <AnnouncementBarCloseBtnDark /> : <AnnouncementBarCloseBtn /> }
          </div>
        )}
        <AnnouncementBarContent className={styles.announcementBarContent} />
      </div>
    </div>
  );
}
