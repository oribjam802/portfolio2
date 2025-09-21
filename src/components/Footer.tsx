import React from 'react'
import ImgPerson from '@assets/images/img/other/img-person.jpg'

const Footer: React.FC = () => {
  return (
    <footer className="snap-start w-full h-screen flex flex-col justify-center items-center">
      <div className="flex items-center justify-between text-sm">
        <div className="w-1/2">
          <img src={ImgPerson} alt="" className="w-full max-w-4xl" />
        </div>
        <div className="w-[46%] pr-[5%] space-y-4">
          <div className="space-y-2.5">
            <p>
              その他の実績は職務経歴書に記載しておりますので、そちらもご参考ください。
            </p>
            <ul className="flex space-x-2.5">
              <li>
                <a
                  href="./dist/pdf/20200801-resume.pdf"
                  target="new"
                  className="underline hover:no-underline"
                >
                  履歴書PDF
                </a>
              </li>
              <li>
                <a
                  href="./dist/pdf/20200801-jobhistory-text.pdf"
                  className="underline hover:no-underline"
                  target="new"
                >
                  職務経歴書PDF
                </a>
              </li>
            </ul>
          </div>
          <small className="block">
            Wada Yuki Portfolio Copyright © Wada Yuki
          </small>
        </div>
      </div>
    </footer>
  )
}

export default Footer
