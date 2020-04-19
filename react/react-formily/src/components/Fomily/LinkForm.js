import React, { useEffect, useState } from "react";
import {
  Form,
  FormItem,
  FormButtonGroup,
  FormEffectHooks,
  Submit,
  Reset,
} from "@formily/antd"; // 或者 @formily/next
import Printer from "@formily/printer";
import { merge } from "rxjs";
import { Input, Select } from "@formily/antd-components"; // 或者@formily/next-components
import "antd/dist/antd.css";

const { onFieldValueChange$, onFieldInit$ } = FormEffectHooks;

const LinkForm = () => {
  const [value, setValue] = useState({
    aa: 123,
  });
  return (
    <Printer noSchema>
      <Form
        value={value}
        labelCol={5}
        wrapperCol={14}
        effects={(effects) => {
          console.log("effects.setFieldState", effects);
          merge(onFieldValueChange$("aa"), onFieldInit$("aa")).subscribe(
            (fieldState) => {
              effects.setFieldState("bb", (state) => {
                state.visible = fieldState.value === 123;
              });
            }
          );
        }}
      >
        <FormItem
          label="AA"
          dataSource={[
            { label: "123", value: 123 },
            { label: "321", value: 321 },
          ]}
          name="aa"
          component={Select}
        />
        <FormItem label="BB" name="bb" component={Input} />
        <FormButtonGroup offset={5}>
          <Submit>查询</Submit>
          <Reset>重置</Reset>
        </FormButtonGroup>
      </Form>
    </Printer>
  );
};
export default LinkForm;
