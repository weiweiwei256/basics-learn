import React, { useState } from 'react'
import {
  Form,
  FormItem,
  FormButtonGroup,
  Submit,
  Reset,
  FormEffectHooks,
  FormItemDeepProvider as FormLayout,
  InternalVirtualField as VirtualField
} from '@formily/antd'
import { Button, Card, Row, Col } from 'antd'
import Printer from '@formily/printer'
import {
  Input,
  Radio,
  Checkbox,
  Select,
  DatePicker,
  NumberPicker,
  TimePicker,
  Upload,
  Switch,
  Range,
  Transfer,
  Rating
} from '@formily/antd-components' // 或者@formily/next-components
import 'antd/dist/antd.css'

const LayoutForm = () => {
  const [state, setState] = useState({ editable: true })
  return (
    <Printer noSchema>
      <Form
        editable={state.editable}
        effects={({ setFieldState }) => {
          FormEffectHooks.onFieldValueChange$('bbb').subscribe(({ value }) => {
            setFieldState('detailCard', state => {
              state.visible = value
            })
          })
          FormEffectHooks.onFieldValueChange$('ccc').subscribe(({ value }) => {
            setFieldState('layout_1', state => {
              state.visible = value
            })
          })
        }}
        labelCol={8}
        wrapperCol={6}
      >
        <Card title="基本信息" style={{ marginBottom: 15 }}>
          <FormItem name="aaa" label="字段1" component={Input} />
          <FormItem
            name="bbb"
            label="控制详细信息显示隐藏"
            dataSource={[
              { value: true, label: '显示' },
              { value: false, label: '隐藏' }
            ]}
            initialValue={true}
            component={Select}
          />
          <FormItem
            name="ccc"
            label="控制字段3显示隐藏"
            dataSource={[
              { value: true, label: '显示' },
              { value: false, label: '隐藏' }
            ]}
            initialValue={true}
            component={Select}
          />
        </Card>
        <VirtualField name="detailCard">
          <Card title="详细信息">
            <FormLayout labelCol={8} wrapperCol={12}>
              <FormItem name="layout_1" label="字段3">
                <Row gutter={24}>
                  <Col span={6}>
                    <FormItem name="ddd" component={NumberPicker} />
                  </Col>
                  <Col span={18}>
                    <FormItem name="eee" component={DatePicker} />
                  </Col>
                </Row>
              </FormItem>
              <FormItem name="layout_2" title="对象字段">
                <Row gutter={10}>
                  <Col span={6}>
                    <FormItem
                      name="mmm.ddd1"
                      initialValue={123}
                      component={NumberPicker}
                    />
                  </Col>
                  <Col span={18}>
                    <FormItem
                      name="mmm.[startDate,endDate]"
                      component={DatePicker.RangePicker}
                    />
                  </Col>
                </Row>
              </FormItem>
            </FormLayout>
            <FormLayout labelCol={8} wrapperCol={16}>
              <FormItem name="layout_3" label="文本串联">
                <div style={{ display: 'flex' }}>
                  <span style={{ marginRight: 5 }}>定</span>
                  <FormItem
                    initialValue={10}
                    required
                    name="aa1"
                    style={{
                      width: 80
                    }}
                    help="简单描述"
                    component={Input}
                  />
                  <span style={{ margin: '0 5px' }}>元/票 退</span>
                  <FormItem
                    initialValue={20}
                    required
                    name="aa2"
                    help="简单描述"
                    component={NumberPicker}
                  />
                  <span style={{ margin: '0 5px' }}>元/票 改</span>
                  <FormItem
                    initialValue={30}
                    required
                    name="aa3"
                    help="简单描述"
                    component={NumberPicker}
                  />
                  <span style={{ margin: '0 5px' }}>元/票</span>
                </div>
              </FormItem>
            </FormLayout>
            <FormItem name="aas" label="字段4" component={Input} />​
            <Card title="区块">
              <FormItem name="ddd2" label="字段5" component={Input} />
              <FormItem name="eee2" label="字段6" component={Input} />
            </Card>
          </Card>
        </VirtualField>​<FormButtonGroup offset={8} sticky>
          ​<Submit>提交</Submit>​
          <Button
            type="primary"
            onClick={() => setState({ editable: !state.editable })}
          >
            {state.editable ? '详情' : '编辑'}
          </Button>
          <Reset>重置</Reset>​
        </FormButtonGroup>
      </Form>
    </Printer>
  )
}
export default LayoutForm;