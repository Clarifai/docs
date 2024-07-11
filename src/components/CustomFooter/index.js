import React, { useEffect, useState } from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import GithubIcon from '../../icons/github.svg';
import TwitterIcon from '../../icons/twitter.svg';
import DiscordIcon from '../../icons/discord.svg';
import LinkedInIcon from '../../icons/linkedin.svg';
import FacebookIcon from '../../icons/facebook.svg';
import SlackIcon from '../../icons/slack.svg';
import YoutubeIcon from '../../icons/youtube.svg';
import StackoverflowIcon from '../../icons/stack-overflow.svg';
import styles from './styles.module.css';

const CustomFooter = () => {
  return (
    <footer className={styles['custom-footer-wrapper']}>
      <div className={styles['logo-wrapper']}>
        <img src="/img/logos/clarifai-color-light-logo.svg" className={styles['dark-theme-logo']} />
        <img src="/img/logos/clarifai-color-dark-logo.svg" className={styles['light-theme-logo']} />
      </div>
      <div className={styles['copyright']}>{`© ${new Date().getFullYear()} Clarifai, Inc. All rights reserved`}</div>
      <div className={styles['footerSocialIconsWrapper']}>
        <div className={styles['socialBrands']}>
          <Link href={'https://github.com/Clarifai'} rel="noopener noreferrer" aria-label={'Github'}>
            <GithubIcon />
          </Link>
        </div>
        <div className={styles['socialBrands']}>
          <Link href={'https://twitter.com/clarifai'} rel="noopener noreferrer" aria-label={'Twitter'}>
            <TwitterIcon />
          </Link>
        </div>
        <div className={styles['socialBrands']}>
          <Link href={'https://discord.gg/WgUvPK4pVD'} rel="noopener noreferrer" aria-label={'Discord'}>
            <DiscordIcon />
          </Link>
        </div>
        <div className={styles['socialBrands']}>
          <Link
            href={'https://www.youtube.com/@theworldsai'}
            rel="noopener noreferrer"
            aria-label={'Youtube'}
          >
            <YoutubeIcon />
          </Link>
        </div>
        <div className={styles['socialBrands']}>
          <Link href={'https://www.linkedin.com/company/clarifai'} rel="noopener noreferrer" aria-label={'Linkedin'}>
            <LinkedInIcon />
          </Link>
        </div>
        {/* <div className={styles['socialBrands']}>
          <Link href={'https://www.facebook.com/Clarifai/'} rel="noopener noreferrer" aria-label={'Facebook'}>
            <FacebookIcon />
          </Link>
        </div>
        <div className={styles['socialBrands']}>
          <Link href={'https://join.slack.com/t/clarifaicommunity/shared_invite/zt-1jehqesme-l60djcd3c_4a1eCV~uPUjQ'} rel="noopener noreferrer" aria-label={'Slack'}>
            <SlackIcon />
          </Link>
        </div>
        <div className={styles['socialBrands']}>
          <Link href={'https://stackoverflow.com/questions/tagged/clarifai'} rel="noopener noreferrer" aria-label={'Stackoverflow'}>
            <StackoverflowIcon />
          </Link>
        </div> */}
      </div>
    </footer>
  );
};

export default CustomFooter;
