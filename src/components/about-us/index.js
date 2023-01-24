import React from "react";
import {cn as bem} from "@bem-react/classname";
import './style.css';

function AboutUs(props) {
  const cn = bem('AboutUs');

  return (


    <div className={cn()}>
      <h1 className={cn('title')}>О НАС</h1>
      <div className={cn('description')}>
        <p>
          ООО КОЛЬСКИЙ САЛЮТ осуществляет следующие виды деятельности:<br/>
          - оптовая и интернет-торговля развлекательными пиротехническими изделиями бытового назначения;<br/>
          - показ профессиональных пиротехнических шоу (высотных, парковых, сценических, в том числе в закрытых помещениях).<br/>
          Компания создана в 2004 году, когда и стала первой на Кольском полуострове гражданской лицензированной организацией,
          осуществляющей показы высотных и сценических фейерверков на профессиональной основе. Высокий уровень подготовки
          работников и использование лучших, сертифицированных материалов и оборудования стали залогом устойчивого развития компании
          и авторитета среди заказчиков и покупателей. Среди постоянных заказчиков практически все муниципалитеты и крупнейшие предприятия Мурманской области.
          С появлением в Мурманске ООО «Кольский Салют» с прилавков области очень быстро была вытеснена контрафактная
          пиротехника бытового назначения и сегодня по всей территории полуострова, благодаря нашей компании, можно найти
          качественную продукцию старейших и крупнейших отечественных производителей пиротехники из Сергиева Посада,
          работающих на научно-производственной базе НИИ ПРИКЛАДНОЙ ХИМИИ, таких как «РУССКАЯ ПИРОТЕХНИКА», «РУССКИЙ ФЕЙЕРВЕРК»,
          ТРОИЦКИЙ СНАРЯЖАТЕЛЬНЫЙ ЗАВОД.
        </p>

      </div>
      <p className={cn('name')}>ООО "КОЛЬСКИЙ САЛЮТ" ИНН 5190123399 ОГРН 1045100153438</p>
      <div className={cn('docs')}>
        <img title={'Нажмите чтобы открыть'}
          // onClick={() => window.open('https://static.wixstatic.com/media/b3007b_22cf3484bedf4997955a7b9367a901cc~mv2_d_1275_1755_s_2.jpg/v1/fill/w_669,h_921,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/b3007b_22cf3484bedf4997955a7b9367a901cc~mv2_d_1275_1755_s_2.jpg')}
          // src="https://static.wixstatic.com/media/b3007b_aca2f6af3a1e4755bf8b861995f76c6e~mv2.jpg/v1/fill/w_236,h_327,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/b3007b_aca2f6af3a1e4755bf8b861995f76c6e~mv2.jpg"
          // alt="license"
             onClick={() => window.open('/img/licence-big.webp')}
             src="/img/licence-small.webp"
             alt="license"
        />
        <img title={'Нажмите чтобы открыть'}
          // onClick={() => window.open('https://static.wixstatic.com/media/b3007b_1dd6b22e1e3a4d22b2ff297a3caad487~mv2_d_1738_1235_s_2.jpg/v1/fill/w_1703,h_1210,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/npwUv339Yv4.jpg')}
          // src="https://static.wixstatic.com/media/b3007b_1dd6b22e1e3a4d22b2ff297a3caad487~mv2_d_1738_1235_s_2.jpg/v1/fill/w_324,h_233,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/npwUv339Yv4.jpg"
          // alt="certificate"
             className={cn('certificate')}
             onClick={() => window.open('/img/certificate-big.webp')}
             src="/img/certificate-small.webp"
             alt="certificate"

        />
        <img title={'Нажмите чтобы открыть'}
          // onClick={() => window.open('https://static.wixstatic.com/media/b3007b_23f7f299b0d2411db5d6785ed57e5ec5~mv2_d_1230_1739_s_2.jpg/v1/fill/w_856,h_1210,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0Vc2gv6qCg8.jpg')}
          // src="https://static.wixstatic.com/media/b3007b_23f7f299b0d2411db5d6785ed57e5ec5~mv2_d_1230_1739_s_2.jpg/v1/fill/w_226,h_319,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/0Vc2gv6qCg8.jpg"
          // alt="certificate2"
             onClick={() => window.open('/img/cer-kat-big.webp')}
             src="/img/cer-kat-small.webp"
             alt="certificate2"
        />
      </div>
    </div>
  )
}
export default React.memo(AboutUs)