import {useParams} from "react-router-dom";
import Arm1inside from '../../images/ExerciseImages/pngForArm1.jpg'
import Arm2inside from '../../images/ExerciseImages/pngForarm2.jpg'
import Leg1inside from '../../images/ExerciseImages/pngForLeg1.jpg'
import Leg2inside from '../../images/ExerciseImages/pngForleg2.jpg'
import React from "react";
import './infoExercise.css'


const InfoExercise = () => {
    const insideInfo = [
        {
            id:1,
            ImageArm: Arm1inside,
            articleArm: 'Такие вращения являются простым и эффективным упражнением из офисной гимнастики для мягкой разминки верхней части спины и плечевого пояса. Стараемся делать амплитудные вращения, шею не втягиваем.',
        },
        {
            id:2,
            ImageArm: Arm2inside,
            articleArm: '\n' +
                'Полезное упражнение для офисной гимнастики, которое разминает все мелкие суставы и связки кисти, улучшает кровообращение рук. Обязательно к выполнению для людей, работающих за компьютером.'
        }
        // {
        //     id:3,
        //     ImageLeg: Leg1inside,
        //     articleLeg: 'Положите ладони на колени, стопы поставьте на пол. Поставьте правую ногу на носок, оставляя левую стоять на полу. Затем правую опустите, а левую поставьте на носок, максимально вытягивая стопу, чтобы растянуть мышцы. Выполняйте шаги ритмично, не задерживая дыхания. Упражнение отлично разминает голеностоп, .снимает усталость с ног, а также улучшает крово- и лимфоток, предотвращая варикоз',
        // },
        // {
        //     id:4,
        //     ImageLeg: Leg2inside,
        //     articleLeg: 'Поставьте ноги под прямым углом, руки положите на сидение стула. На выдохе поднимите правое колено вверх, на вдохе – опустите. На следующем выдохе поменяйте ногу. Поднимайте ногу как можно выше, чтобы стимулировать отток крови. Выполняйте это упражнение в офисе, чтобы предотвратить боль в коленях от долгого сидения, улучшить кровообращение и предотвратить отечность к концу дня.'
        // }
    ]
    const Params = useParams()
    console.log(Params , "Params")
    return (
        <>
          <div>
              <h1>Упражнение для рук</h1>
              {insideInfo.map((item) =>
                  <div>
                      <div className='wrapperInfo'>
                          <div className='URL_img'>
                              <img
                                  key={item.id}
                                  src={item.ImageArm}
                                  alt={''}
                                  className='insideImage'
                              />
                              <a>Ссылка на youtube</a>
                          </div>
                          <div>
                              <p className='articleInfo'>{item.articleArm}</p>
                          </div>
                      </div>
                  </div>
              )}
          </div>
        </>
        )
}

export default InfoExercise;