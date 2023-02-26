import React, { ReactElement, useState } from 'react'
import { ask } from '../api'
import Footer from '../components/Footer';
import Head from "../components/Head"
import Loading from '../components/Loading';


export default function Home(): ReactElement {
  const [prompt, setPrompt] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [aiAnswerText, setAiAnswerText] = useState<string>('');

  const doAsk = async () => {
    if (prompt) {
      setIsLoading(true);
      const { data } = await ask({ prompt });
      if (data && data.text) {
        setAiAnswerText(data.text);
        setIsLoading(false);
      }
    }
  }

  return (
    <>
      <Head title='AIbox' />
      <div className="container mx-auto my-20 w-6/12 flex items-center justify-between">
        <input className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-6 ring-1 ring-slate-200 shadow-sm" type="text" aria-label="世间有很多好答案在等一个好问题" placeholder="世间有很多好答案在等一个好问题"
          onChange={(e) => {
            setPrompt(e.target.value);
          }}
        />
        <button onClick={doAsk} className="-ml-36 mr-4">
          <svg width="20" height="20" fill="currentColor" className="text-slate-400 pointer-events-none group-focus-within:text-blue-500" aria-hidden="true">
            <path fillRule="evenodd" clipRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
          </svg>
        </button>
      </div>
      {
        isLoading ? <div className="-my-2">
          <Loading />
        </div> :
          <div className="container mx-auto w-6/12 break-all bg-gray-50 rounded-md">
            <div className="p-6 pre">
              <div dangerouslySetInnerHTML={{ __html: aiAnswerText }}></div>
            </div>
          </div>

      }
      {/* <Footer /> */}
    </>
  )
}
