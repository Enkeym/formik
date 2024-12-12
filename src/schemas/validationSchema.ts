import * as Yup from 'yup'

// Установка глобальных текстов ошибок
Yup.setLocale({
  mixed: {
    required: 'Поле обязательно для заполнения'
  },
  number: {
    min: ({ min }) => `Значение не может быть меньше ${min}`,
    max: ({ max }) => `Значение не может быть больше ${max}`
  }
})

// Локальное правило для проверки площади
const validateSquare = Yup.number()
  .min(0, 'Значение не может быть меньше 0')
  .max(400, 'Значение не может быть больше 400')
  .test(
    'more-than-sum',
    'Общая площадь должна быть больше суммы жилой площади и площади кухни',
    function (value) {
      const { kitchenSquare, livingSquare } = this.parent
      return (value ?? 0) > (kitchenSquare ?? 0) + (livingSquare ?? 0)
    }
  )

// Полная схема валидации
export const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
  address: Yup.string().required(),
  floor: Yup.number()
    .min(-1, 'Минимальный этаж -1')
    .max(Yup.ref('totalFloors'), 'Этаж не может превышать количество этажей')
    .required(),
  totalFloors: Yup.number()
    .min(-3, 'Минимум этажей -3')
    .max(200, 'Максимум этажей 200')
    .required(),
  square: validateSquare.required(),
  livingSquare: Yup.number().min(0, 'Минимальная жилая площадь 0').required(),
  kitchenSquare: Yup.number().min(0, 'Минимальная площадь кухни 0').required()
})
