import styles from "./Footer.module.css";
import { FaHeadphones } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";


export default function Footer() {
  return (
    <div className={styles.footer}>
        <div className={styles.footerContainer}>
      <ul class="pawinhandInfo">
        <img
          src="https://cafe24.poxo.com/ec01/pawinhand1/6aDrbsrpgztyixM+aENnH6HjH4TTykqgQt5HQjnLmP6XbyGTSvgS4FKKyxfnmmzX/swHIcSYFKQg3+gyk9qXzw==/_/img/pawinhand/ico-rescue.png"
          alt=""
        />{" "}
        오늘 구조된 동물 <strong class="data-rescue">212</strong> 마리{"  "}
        <img
          src="https://cafe24.poxo.com/ec01/pawinhand1/6aDrbsrpgztyixM+aENnH6HjH4TTykqgQt5HQjnLmP6XbyGTSvgS4FKKyxfnmmzX/swHIcSYFKQg3+gyk9qXzw==/_/img/pawinhand/ico-adoption.png"
          alt=""
        />{" "}
        입양률 <strong class="data-adoptaion">22</strong> %{"  "}
        <img
          src="https://cafe24.poxo.com/ec01/pawinhand1/6aDrbsrpgztyixM+aENnH6HjH4TTykqgQt5HQjnLmP6XbyGTSvgS4FKKyxfnmmzX/swHIcSYFKQg3+gyk9qXzw==/_/img/pawinhand/ico-euthanasia.png"
          alt=""
        />{" "}
        안락사율 <strong class="data-euthanasis">17</strong> %
      </ul>

      <div class="app_download">
        <p>APP ON</p>
        <a
          href="https://appsto.re/kr/oDrX8.i"
          title="애플 앱스토어"
        >
          <img
            src="https://cafe24.poxo.com/ec01/pawinhand1/6aDrbsrpgztyixM+aENnH6HjH4TTykqgQt5HQjnLmP6XbyGTSvgS4FKKyxfnmmzX/swHIcSYFKQg3+gyk9qXzw==/_/img/pawinhand/ico-link-apple.png"
            alt="앱스토어"
          />
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=lost.animal.main"
          title="구글 플레이스토어"
        >
          <img
            src="https://cafe24.poxo.com/ec01/pawinhand1/6aDrbsrpgztyixM+aENnH6HjH4TTykqgQt5HQjnLmP6XbyGTSvgS4FKKyxfnmmzX/swHIcSYFKQg3+gyk9qXzw==/_/img/pawinhand/ico-link-playStore.png"
            alt="구글플레이스토어"
          />
        </a>
      </div>
      </div>

      <div class="contactInfo">
        <p>
          <FaHeadphones /> 02-6956-6242<br />
          <MdOutlineMailOutline /> pawinhand@naver.com
        </p>

        <p className="addr">
          주식회사 포인핸드 ㅣ 대표자 : 이환희 <br />
          사업자번호 : 322-87-00895 ㅣ 사업장 주소 : 서울특별시 마포구 대흥로 67
          (정신빌딩) 401호
        </p>
        <div className="copyright">
          <p>
            ©포인핸드 제공/데이터 출처 <strong>농림축산식품부</strong> ㅣ
            Website made by{" "}
            <a href="https://github.com/horang0210" >
              Hyejin.H
            </a>
          </p>
          <p>©Pawinhandteam all right reserved.</p>
        </div>
      </div>
    </div>
  );
}
