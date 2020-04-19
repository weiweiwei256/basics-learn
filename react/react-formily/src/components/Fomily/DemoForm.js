import React from "react";
import { Form, FormItem, FormButtonGroup, Reset, Submit } from "@formily/next";
import { Input } from "@alifd/next";
import "@alifd/next/dist/next.css"
const DemoForm = () => {
  return (
    <div>
      <p>This is formily</p>
      <Form
        onSubmit={(value) => {
          console.log(`onSubmit value:`+JSON.stringify(value));
        }}
      >
        <FormItem
          name="name"
          label="姓名"
          placeholder="请填写姓名"
          component={Input}
        ></FormItem>
        <FormButtonGroup>
          <Submit></Submit>
          <Reset></Reset>
        </FormButtonGroup>
      </Form>
    </div>
  );
};
export default DemoForm;
