import { Form, Formik } from "formik";
import React from "react";
import { validationSchema } from "../schemas/validationSchema";
import { withFormikField } from "./FormikField";

// Обертки для инпутов
const FormikInput = withFormikField("input");
const FormikRadio = withFormikField("input");
const FormikCheckBox = withFormikField("input");

const PropertyForm: React.FC = () => {
  const initialValues = {
    name: "",
    address: "",
    floor: 0,
    totalFloors: 0,
    square: 0,
    livingSquare: 0,
    kitchenSquare: 0,
    propertyType: "residential",
    hasBalcony: false,
  };

  const handleSubmit = (values: typeof initialValues) => {
    console.log("Submitted values:", values);
  };

  return (
    <div className="container">
      <h1>Добавить объект</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label>Название объекта</label>
              <FormikInput type="text" name="name" placeholder="Название объекта" />
            </div>

            <div>
              <label>Адрес</label>
              <FormikInput type="text" name="address" placeholder="Адрес" />
            </div>

            <div>
              <label>Этаж</label>
              <FormikInput type="number" name="floor" placeholder="Этаж" />
            </div>

            <div>
              <label>Количество этажей</label>
              <FormikInput type="number" name="totalFloors" placeholder="Количество этажей" />
            </div>

            <div>
              <label>Площадь</label>
              <FormikInput type="number" name="square" placeholder="Площадь" />
            </div>

            <div>
              <label>Жилая площадь</label>
              <FormikInput type="number" name="livingSquare" placeholder="Жилая площадь" />
            </div>

            <div>
              <label>Площадь кухни</label>
              <FormikInput type="number" name="kitchenSquare" placeholder="Площадь кухни" />
            </div>

            <div>
              <label>Тип объекта</label>
              <FormikRadio type="radio" name="propertyType" value="residential" />
              Жилая
              <FormikRadio type="radio" name="propertyType" value="commercial" />
              Коммерческая
            </div>

            <div>
              <label>
                <FormikCheckBox type="checkbox" name="hasBalcony" />
                Есть балкон
              </label>
            </div>

            <button type="submit" disabled={isSubmitting}>
              Сохранить
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PropertyForm;
