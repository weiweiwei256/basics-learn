import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import {
  Form,
  FormItem,
  FormButtonGroup,
  FormEffectHooks,
  FormPath,
  Submit,
  Reset,
  setValidationLocale
} from '@formily/antd' // 或者 @formily/next
import Printer from '@formily/printer'
import { Input, Select, NumberPicker } from '@formily/antd-components' // 或者@formily/next-components
import 'antd/dist/antd.css'

const { onFieldValueChange$, onFieldInit$ } = FormEffectHooks

setValidationLocale({
  zh: {
    url: 'URL格式不合法，注意：必须要带上协议，可以直接以//开头'
  }
})

const placehodlers = {
  url: 'https://test.alibaba.com',
  email: 'test@alibaba-inc.com',
  qq: '123',
  date: '2012-12-12',
  idcard: '433533199312058746',
  zip: '333333',
  money: '$12.33',
  ipv6: '2001:0db8:86a3:08d3:1319:8a2e:0370:7344',
  ipv4: '168.1.1.0',
  phone: '16835646823',
  zh: '我爱中国'
}

const externalTitle = <span style={{ color: 'green' }}>React Node Message</span>
const requiredReactNode = (
  <div>
    必填，<span style={{ color: 'blue' }}>富文本错误文案</span>
  </div>
)

const VerifyForm = () => {
  return (
    <Printer noSchema>
      <Form
        labelCol={5}
        wrapperCol={14}
        validateFirst
        effects={({ setFieldState }) => {
          onFieldValueChange$('format_type').subscribe(fieldState => {
            setFieldState('format_text', state => {
              state.value = placehodlers[fieldState.value]
              state.rules = fieldState.value
              state.props.placeholder = placehodlers[fieldState.value]
            })
          })
        }}
      >
        <FormItem required label="Required" name="required" component={Input} />
        <FormItem
          required
          label="Format Type"
          name="format_type"
          dataSource={[
            'url',
            'email',
            'ipv6',
            'ipv4',
            'idcard',
            'taodomain',
            'qq',
            'phone',
            'money',
            'zh',
            'date',
            'zip'
          ]}
          component={Select}
        />
        <FormItem
          required
          label="Format Text"
          name="format_text"
          component={Input}
        />
        <FormItem
          required
          label="Other Rules"
          rules={[
            {
              whitespace: true,
              min: 5,
              max: 10,
              validator(value) {
                return value.indexOf('asd') > -1 ? '文本里不能包含asd' : ''
              }
            }
          ]}
          name="custom_rules"
          component={Input}
        />
        <FormItem
          required
          label="Async Validate"
          rules={value => {
            return new Promise(resolve => {
              setTimeout(() => {
                resolve(value !== '57350' ? '验证码验证失败' : '')
              }, 1000)
            })
          }}
          name="remote_code"
          triggerType="onBlur"
          hasFeedback
          placeholder="Please input remote code:57350"
          component={Input}
        />
        <FormItem
          required
          label="Threshold Validate"
          rules={value => {
            if (value > 0 && value < 100) {
              return {
                type: 'warning',
                message: '第一阶梯'
              }
            } else if ((value >= 100) & (value < 500)) {
              return {
                type: 'warning',
                message: '第二阶梯'
              }
            } else if ((value >= 500) & (value < 1000)) {
              return {
                type: 'warning',
                message: '第三阶梯'
              }
            } else if (value >= 1000) {
              return {
                type: 'warning',
                message: '第四阶梯'
              }
            } else {
              return ''
            }
          }}
          name="threshold"
          component={NumberPicker}
        />
        <FormItem
          label="Custom Message"
          rules={{
            required: true,
            extra: '校验模板注入变量',
            message: 'Required {{ extra }}'
          }}
          name="custom_message"
          component={Input}
        />
        <FormItem
          label={externalTitle}
          rules={[
            {
              required: true,
              message: requiredReactNode
            }
          ]}
          name="react_node_message"
          component={Input}
        />
        <FormButtonGroup offset={5}>
          <Submit>查询</Submit>
          <Reset>重置</Reset>
        </FormButtonGroup>
      </Form>
    </Printer>
  )
}
export default VerifyForm;