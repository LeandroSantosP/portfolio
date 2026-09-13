import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ArrowUpRight, BadgeCheck, FileText, Image as ImageIcon, X } from 'lucide-react'

type Certificate = {
  nameKey: string
  platform: string
  period: string
  logo?: string
  certification: string
  preview?: string
  verificationId?: string
  kind: 'PDF' | 'IMAGE'
}

const certificates: Certificate[] = [
  {
    nameKey: 'cs50',
    platform: 'Harvard',
    period: '2024',
    logo: 'https://media.licdn.com/dms/image/v2/C4E0BAQF5t62bcL0e9g/company-logo_200_200/company-logo_200_200/0/1631318058235?e=1789603200&v=beta&t=FAVluJm-TJah9PDh5ks_T9TO3NQCi4pZDfyr4gSEJO0',
    certification: 'https://certificates.cs50.io/0c61dd6a-88d0-4904-9b43-a365d142d399.pdf?size=letter',
    preview: '/certifications/CS50x-preview.png',
    kind: 'PDF',
  },
  {
    nameKey: 'flyrank',
    platform: 'FlyRank AI',
    period: '2026',
    logo: 'https://media.licdn.com/dms/image/v2/D4D0BAQFImJOWJQrw7Q/company-logo_400_400/B4DZ47fBzzJ8AU-/0/1779114450389/flyrank_logo?e=1790208000&v=beta&t=FTn_TUS3pQslZgQ6InBMrA6vA7s45KvaEdEeIdV6TOg',
    certification: 'https://internship.flyrank.ai/api/documents/5b77eac7-51bd-46d8-9a80-5db37f32c2d2/pdf#navpanes=0&pagemode=none',
    preview: '/certifications/FlyRank-Certification-preview.png',
    verificationId: 'FR-D11-86497-9B812',
    kind: 'PDF',
  },
  {
    nameKey: 'efset',
    platform: 'EF SET',
    period: '2025',
    logo: 'https://media.licdn.com/dms/image/v2/D4E0BAQEw-1S8jictTA/company-logo_200_200/B4EZdFpZBcH0AI-/0/1749220168176/efset_logo?e=1790208000&v=beta&t=IoCe37BFJEg3g33Fg949Dug2nPXBfRIQewgn6M8oE',
    certification: 'https://cert.efset.org/en/ebiMhd',
    preview: '/certifications/EFSET-preview.png',
    kind: 'PDF',
  },
  {
    nameKey: 'excel',
    platform: 'Santander Open Academy',
    period: '2024',
    logo: 'https://media.licdn.com/dms/image/v2/D4D0BAQHbRU5HNC8kOA/company-logo_200_200/company-logo_200_200/0/1701098269536/santander_universidades_logo?e=1789603200&v=beta&t=5zMzP4KnG38MDzel2BE94njmfdlFq-RSHJOc_DW8E8c',
    certification: 'https://drive.google.com/file/d/1fXtrj12_jZJ02FtIlnzb3obEh-nwX4xh/view?usp=sharing',
    preview: '/certifications/excel-preview.png',
    kind: 'PDF',
  },
  {
    nameKey: 'aws',
    platform: 'TreinaWeb',
    period: '2025',
    certification: 'https://www.linkedin.com/learning/certificates/ee8f011e6fa53d742dc56e947a0763b192fbc0a0ea3aabf2769d0913f3edccb9',
    preview: '/certifications/aws.jpeg',
    kind: 'PDF',
  },
  {
    nameKey: 'flyrankRecommendation',
    platform: 'FlyRank AI',
    period: '2026',
    logo: 'https://media.licdn.com/dms/image/v2/D4D0BAQFImJOWJQrw7Q/company-logo_400_400/B4DZ47fBzzJ8AU-/0/1779114450389/flyrank_logo?e=1790208000&v=beta&t=FTn_TUS3pQslZgQ6InBMrA6vA7s45KvaEdEeIdV6TOg',
    certification: 'https://internship.flyrank.ai/api/documents/87f38ed8-f6e4-445c-a649-659f5d82a7d5/pdf#navpanes=0&pagemode=none',
    preview: '/certifications/recomedation-letter-preview.png',
    kind: 'PDF',
  },
]

export default function Certificates(): JSX.Element {
  const { t } = useTranslation()
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null)

  useEffect(() => {
    if (!selectedCertificate) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedCertificate(null)
    }
    document.addEventListener('keydown', onKey)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = previousOverflow
    }
  }, [selectedCertificate])

  return (
    <section className="certificates-page route-page">
      <div className="certificates-inner">
        <div className="certificates-intro">
          <span className="eyebrow">{t('certificates.eyebrow')}</span>
          <h1 className="font-headline-xl text-headline-xl text-primary">{t('certificates.title')}</h1>
          <p className="text-body-lg text-secondary">{t('certificates.subtitle')}</p>
        </div>

        <div className="certificates-grid">
          {certificates.map(certificate => (
            <article className="certificate-card" key={certificate.nameKey}>
              <div className="certificate-preview">
                {certificate.preview?.endsWith('.pdf') ? (
                  <iframe className="certificate-document-pdf" src={`${certificate.preview}#toolbar=0&navpanes=0&scrollbar=0`} title={t(`trajectory.courses.${certificate.nameKey}`)} />
                ) : certificate.preview ? (
                  <img className="certificate-document-image" src={certificate.preview} alt={t(`trajectory.courses.${certificate.nameKey}`)} />
                ) : certificate.logo ? (
                  <img src={certificate.logo} alt="" />
                ) : (
                  <FileText size={32} aria-hidden="true" />
                )}
                <span className="certificate-preview-mark">{certificate.kind === 'PDF' ? <FileText size={14} aria-hidden="true" /> : <ImageIcon size={14} aria-hidden="true" />}</span>
                <span className="certificate-verified">
                  <BadgeCheck size={13} aria-hidden="true" />
                  {t('certificates.verified')}
                </span>
              </div>
              <div className="certificate-content">
                <div className="certificate-meta">
                  <span>{certificate.platform}</span>
                  <span>{certificate.period}</span>
                </div>
                <h2>{t(`trajectory.courses.${certificate.nameKey}`)}</h2>
                <p>{t(`certificates.descriptions.${certificate.nameKey}`)}</p>
                {certificate.verificationId && <small>{t('certificates.verification')}: {certificate.verificationId}</small>}
                <button className="certificate-link" type="button" onClick={() => setSelectedCertificate(certificate)}>
                  <BadgeCheck size={16} aria-hidden="true" />
                  {t('certificates.view')}
                  <ArrowUpRight size={16} aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedCertificate && (
        <div className="certificate-modal" role="dialog" aria-modal="true" aria-label={t(`trajectory.courses.${selectedCertificate.nameKey}`)} onClick={() => setSelectedCertificate(null)}>
          <div className="certificate-modal-panel" onClick={event => event.stopPropagation()}>
            <div className="certificate-modal-header">
              <div>
                <span>{selectedCertificate.platform} · {selectedCertificate.period}</span>
                <h2>{t(`trajectory.courses.${selectedCertificate.nameKey}`)}</h2>
              </div>
              <button className="certificate-modal-close" type="button" onClick={() => setSelectedCertificate(null)} aria-label={t('certificates.close')}>
                <X size={20} aria-hidden="true" />
              </button>
            </div>
            <div className="certificate-modal-document">
              {selectedCertificate.preview?.endsWith('.pdf') ? (
                <iframe src={`${selectedCertificate.preview}#toolbar=1&navpanes=0`} title={t(`trajectory.courses.${selectedCertificate.nameKey}`)} />
              ) : selectedCertificate.preview ? (
                <img src={selectedCertificate.preview} alt={t(`trajectory.courses.${selectedCertificate.nameKey}`)} />
              ) : (
                <div className="certificate-modal-fallback">
                  <FileText size={36} aria-hidden="true" />
                  <p>{t('certificates.previewUnavailable')}</p>
                </div>
              )}
            </div>
            <a className="certificate-modal-open" href={selectedCertificate.certification} target="_blank" rel="noreferrer">
              {t('certificates.openOriginal')}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      )}
    </section>
  )
}
