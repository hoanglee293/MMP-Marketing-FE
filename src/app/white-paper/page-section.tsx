'use client'
import React from 'react'
import { useLang } from '@/lang/useLang'

const WhitePaperPageTwo = () => {
  const { t, tArray } = useLang()

  return (
    <div className="mt-12">
      {/* 4.4 스테이킹 보상 */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-yellow-400">{t('whitePaper.sections.tokenomics.staking.title')}</h2>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6">
          <h3 className="text-2xl font-bold mb-4 text-green-400">{t('whitePaper.sections.tokenomics.staking.rewards.title')}</h3>
          <ul className="list-disc list-inside space-y-2 ml-4 text-lg">
            {tArray('whitePaper.sections.tokenomics.staking.rewards.items').map((item: string, idx: number) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6">
          <h3 className="text-2xl font-bold mb-4 text-green-400">{t('whitePaper.sections.tokenomics.staking.mechanism.title')}</h3>
          <ul className="list-disc list-inside space-y-2 ml-4 text-lg">
            {tArray('whitePaper.sections.tokenomics.staking.mechanism.items').map((item: string, idx: number) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6">
          <h3 className="text-2xl font-bold mb-4 text-green-400">{t('whitePaper.sections.tokenomics.staking.community.title')}</h3>
          {/* <h4 className="text-xl font-bold mb-2 text-primary">{t('whitePaper.sections.tokenomics.staking.community.titlesub')}</h4> */}
          <ul className="list-disc list-inside space-y-2 ml-4 text-lg">
            {tArray('whitePaper.sections.tokenomics.staking.community.items').map((item: string, idx: number) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <p className="mt-4 text-base text-white/80">{t('whitePaper.sections.tokenomics.staking.community.summary')}</p>
        </div>
      </section>

      {/* 4.5 마이닝 앱 */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-yellow-400">{t('whitePaper.sections.tokenomics.miningApp.title')}</h2>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6">
          <h3 className="text-2xl font-bold mb-4 text-blue-400">개요</h3>
          <p className="text-lg leading-relaxed mb-4">{t('whitePaper.sections.tokenomics.miningApp.overview')}</p>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6">
          <h3 className="text-2xl font-bold mb-4 text-blue-400">{t('whitePaper.sections.tokenomics.miningApp.mechanism.title')}</h3>
          <h4 className="text-xl font-bold mb-2 text-blue-300">{t('whitePaper.sections.tokenomics.miningApp.mechanism.mining.title')}</h4>
          <ul className="list-disc list-inside space-y-2 ml-4 text-lg">
            {tArray('whitePaper.sections.tokenomics.miningApp.mechanism.mining.items').map((item: string, idx: number) => (    
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <h4 className="text-xl font-bold mt-6 mb-2 text-blue-300">{t('whitePaper.sections.tokenomics.miningApp.mechanism.points.title')}</h4>
          <ul className="list-disc list-inside space-y-2 ml-4 text-lg">
            {tArray('whitePaper.sections.tokenomics.miningApp.mechanism.points.items').map((item: string, idx: number) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6">
          <h3 className="text-2xl font-bold mb-4 text-blue-400">{t('whitePaper.sections.tokenomics.miningApp.security.title')}</h3>
          <ul className="list-disc list-inside space-y-2 ml-4 text-lg">
            {tArray('whitePaper.sections.tokenomics.miningApp.security.items').map((item: string, idx: number) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6">
          <h3 className="text-2xl font-bold mb-4 text-blue-400">{t('whitePaper.sections.tokenomics.miningApp.roadmap.title')}</h3>
          <ul className="list-disc list-inside space-y-2 ml-4 text-lg">
            {tArray('whitePaper.sections.tokenomics.miningApp.roadmap.items').map((item: string, idx: number) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <p className="mt-4 text-base text-white/80">{t('whitePaper.sections.tokenomics.miningApp.roadmap.summary')}</p>
        </div>
      </section>

      {/* 5. 리소스 */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-yellow-400">{t('whitePaper.sections.tokenomics.resources.title')}</h2>
        
        {/* Tutorial Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6">
          <h3 className="text-2xl font-bold mb-4 text-purple-400">{t('whitePaper.sections.tokenomics.resources.tutorial.title')}</h3>
          <p className="text-lg leading-relaxed mb-4">{t('whitePaper.sections.tokenomics.resources.tutorial.overview')}</p>
          
          <h4 className="text-xl font-bold mb-2 text-purple-300">{t('whitePaper.sections.tokenomics.resources.tutorial.usdc.title')}</h4>
          <ul className="list-disc list-inside space-y-2 ml-4 text-lg">
            {tArray('whitePaper.sections.tokenomics.resources.tutorial.usdc.items').map((item: string, idx: number) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          
          <h4 className="text-xl font-bold mt-6 mb-2 text-purple-300">{t('whitePaper.sections.tokenomics.resources.tutorial.sol.title')}</h4>
          <ul className="list-disc list-inside space-y-2 ml-4 text-lg">
            {tArray('whitePaper.sections.tokenomics.resources.tutorial.sol.items').map((item: string, idx: number) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          
          <h4 className="text-xl font-bold mt-6 mb-2 text-purple-300">{t('whitePaper.sections.tokenomics.resources.tutorial.staking.title')}</h4>
          <ul className="list-disc list-inside space-y-2 ml-4 text-lg">
            {tArray('whitePaper.sections.tokenomics.resources.tutorial.staking.items').map((item: string, idx: number) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Roadmap Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6">
          <h3 className="text-2xl font-bold mb-4 text-orange-400">{t('whitePaper.sections.tokenomics.resources.roadmap.title')}</h3>
          <p className="text-lg leading-relaxed mb-6">{t('whitePaper.sections.tokenomics.resources.roadmap.summary')}</p>
          
          <div className="space-y-6">
            {tArray('whitePaper.sections.tokenomics.resources.roadmap.phases').map((phase: any, idx: number) => (
              <div key={idx} className="border-l-4 border-orange-400 pl-4">
                <h4 className="text-xl font-bold mb-3 text-orange-300">{phase.title}</h4>
                <ul className="list-disc list-inside space-y-2 ml-4 text-lg">
                  {phase.items.map((item: string, itemIdx: number) => (
                    <li key={itemIdx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <p className="mt-6 text-base text-white/80">{t('whitePaper.sections.tokenomics.resources.roadmap.note')}</p>
        </div>

        {/* Audit Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6">
          <h3 className="text-2xl font-bold mb-4 text-red-400">{t('whitePaper.sections.tokenomics.resources.audit.title')}</h3>
          <p className="text-lg leading-relaxed">{t('whitePaper.sections.tokenomics.resources.audit.content')}</p>
        </div>

        {/* Terms Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6">
          <h3 className="text-2xl font-bold mb-4 text-indigo-400">{t('whitePaper.sections.tokenomics.resources.terms.title')}</h3>
          <p className="text-sm text-gray-300 mb-4">{t('whitePaper.sections.tokenomics.resources.terms.lastUpdate')}</p>
          
          <div className="space-y-6">
            {tArray('whitePaper.sections.tokenomics.resources.terms.sections').map((section: any, idx: number) => (
              <div key={idx} className="border-b border-indigo-300/30 pb-4">
                <h4 className="text-xl font-bold mb-3 text-indigo-300">{section.title}</h4>
                {section.content && <p className="text-lg mb-3">{section.content}</p>}
                {section.items && (
                  <ul className="list-disc list-inside space-y-2 ml-4 text-lg">
                    {section.items.map((item: string, itemIdx: number) => (
                      <li key={itemIdx}>{item}</li>
                    ))}
                  </ul>
                )}
                {section.disclaimer && <p className="mt-3 text-base text-white/80 italic">{section.disclaimer}</p>}
                {section.prohibited && <p className="mt-3 text-base text-red-300">{section.prohibited}</p>}
                {section.liability && <p className="mt-3 text-base text-yellow-300">{section.liability}</p>}
              </div>
            ))}
          </div>
          
          <h4 className="text-xl font-bold mt-6 mb-2 text-indigo-300">개선 사항</h4>
          <ul className="list-disc list-inside space-y-2 ml-4 text-lg">
            {tArray('whitePaper.sections.tokenomics.resources.terms.improvements').map((item: string, idx: number) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Privacy Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6">
          <h3 className="text-2xl font-bold mb-4 text-teal-400">{t('whitePaper.sections.tokenomics.resources.privacy.title')}</h3>
          <p className="text-lg leading-relaxed mb-6">{t('whitePaper.sections.tokenomics.resources.privacy.overview')}</p>
          
          <div className="space-y-6">
            {tArray('whitePaper.sections.tokenomics.resources.privacy.sections').map((section: any, idx: number) => (
              <div key={idx} className="border-b border-teal-300/30 pb-4">
                <h4 className="text-xl font-bold mb-3 text-teal-300">{section.title}</h4>
                {section.onchain && (
                  <div className="mb-4">
                    <h5 className="text-lg font-semibold mb-2 text-teal-200">{section.onchain.title}</h5>
                    <p className="text-base">{section.onchain.content}</p>
                  </div>
                )}
                {section.offchain && (
                  <div className="mb-4">
                    <h5 className="text-lg font-semibold mb-2 text-teal-200">{section.offchain.title}</h5>
                    <p className="text-base">{section.offchain.content}</p>
                  </div>
                )}
                {section.analytics && (
                  <div className="mb-4">
                    <h5 className="text-lg font-semibold mb-2 text-teal-200">{section.analytics.title}</h5>
                    <p className="text-base">{section.analytics.content}</p>
                  </div>
                )}
                {section.items && (
                  <ul className="list-disc list-inside space-y-2 ml-4 text-lg">
                    {section.items.map((item: string, itemIdx: number) => (
                      <li key={itemIdx}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
          
          <p className="mt-6 text-base text-white/80">{t('whitePaper.sections.tokenomics.resources.privacy.contact')}</p>
        </div>

        {/* FAQ Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6">
          <h3 className="text-2xl font-bold mb-4 text-cyan-400">{t('whitePaper.sections.tokenomics.resources.faq.title')}</h3>
          
          <div className="space-y-6">
            {tArray('whitePaper.sections.tokenomics.resources.faq.questions').map((faq: any, idx: number) => (
              <div key={idx} className="border-b border-cyan-300/30 pb-4">
                <h4 className="text-lg font-bold mb-3 text-cyan-300">{faq.question}</h4>
                <p className="text-base leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default WhitePaperPageTwo