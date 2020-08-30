import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import {
  Form,
  FormItem,
  FormButtonGroup,
  LifeCycleTypes,
  Submit,
  Reset,
} from "@formily/antd"; // 或者 @formily/next
import { merge } from "rxjs";
import { Input, Select } from "@formily/antd-components"; // 或者@formily/next-components
import "antd/dist/antd.css";

const LifeCycleForm = () => {
  return (
    <Form
      labelCol={5}
      wrapperCol={14}
      effects={($, actions) => {
        const { setFieldState } = actions;
        $(LifeCycleTypes.ON_FORM_INIT).subscribe(() => {
          setFieldState("aa", (state) => {
            state.value = 321;
          });
        });
        $(LifeCycleTypes.ON_FIELD_VALUE_CHANGE, "aa").subscribe(
          (fieldState) => {
            setFieldState("bb", (state) => {
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
  );
};
export default LifeCycleForm;
