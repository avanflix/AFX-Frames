import Head from 'next/head'
import Navbar from '../components/Navbar'
import styles from '../styles/Gallery.module.css'

const photos = [
  { src: '/images/Gallery/1.jpg', alt: 'Fashion Portrait', span: 'tall' },
  { src: '/images/Gallery/2.jpg', alt: 'Model Editorial', span: 'wide' },
  { src: '/images/Gallery/3.jpg', alt: 'Studio Session', span: 'sq' },
  // { src: '/images/Gallery/4.jpg', alt: 'Signature Look', span: 'wide' },
  { src: '/images/Gallery/5.jpg', alt: 'Headshot', span: 'sq' },
  { src: '/images/Gallery/6.jpg', alt: 'Fashion Editorial', span: 'tall' },
  { src: '/images/Gallery/7.jpg', alt: 'Agency Portfolio', span: 'wide' },
  { src: '/images/Gallery/8.jpg', alt: 'Model Casting', span: 'sq' },
  { src: '/images/Gallery/9.jpg', alt: 'Lookbook', span: 'tall' },
  { src: '/images/Gallery/10.jpg', alt: 'Executive Portrait', span: 'wide' },
  { src: '/images/Gallery/11.jpg', alt: 'Influencer Content', span: 'sq' },
  { src: '/images/Gallery/12.jpg', alt: 'Outdoor Session', span: 'wide' },
  // { src: '/images/Gallery/13.jpg', alt: 'Cinematic Reel', span: 'wide' },
  { src: '/images/Gallery/14.jpg', alt: 'Actor Headshot', span: 'tall' },
]

export default function Gallery() {
  return (
    <>


      <Head>
        <title>Gallery – House of the Portfolio</title>
        <meta name="description" content="Browse our curated portfolio gallery — premium photography for models, actors, influencers, and professionals." />
      </Head>


      {/* Page Header */}
      <div className={styles.pageHeader}>
        <div className={styles.headerBg} />
        <div className={styles.headerContent}>
          <p className={styles.headerEyebrow}>CURATED WORK</p>
          <h1 className={styles.headerTitle}>The Gallery</h1>
          <p className={styles.headerSub}>Every image. A statement of excellence.</p>
        </div>
      </div>



      <Navbar />
      {/* Masonry Gallery */}
      <section className={styles.gallerySection}>
        <div className={styles.galleryGrid}>
          {photos.map((photo, i) => (
            <div key={i} className={`${styles.photoItem} ${styles[photo.span]}`}>
              <img src={photo.src} alt={photo.alt} loading="lazy" />
              <div className={styles.photoOverlay}>
                <span className={styles.photoLabel}>{photo.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.galleryCta}>
        <h2 className={styles.ctaTitle}>Ready to create <em>yours?</em></h2>
        <p className={styles.ctaSub}>Join hundreds of creatives who've elevated their presence with us.</p>
        <a href="/join" className={styles.ctaBtn}>View Packages</a>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <p>© {new Date().getFullYear()} House of the Portfolio. All rights reserved.</p>
          <div className={styles.footerLinks}>
            <a href="/">Home</a>
            <a href="/gallery">Gallery</a>
            <a href="/join">Join Now</a>
          </div>
        </div>
      </footer>
    </>
  )
}
