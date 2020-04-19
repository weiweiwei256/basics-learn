import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import {
  Form,
  FormItem,
  FormButtonGroup,
  LifeCycleTypes,
  createFormActions,
  FormProvider,
  FormSpy,
  Submit,
  Reset
} from '@formily/antd' // 或者 @formily/next
import { merge } from 'rxjs'
import { Button } from 'antd'
import { Input, Select } from '@formily/antd-components' // 或者@formily/next-components
import 'antd/dist/antd.css'

const actions = createFormActions()

const LifeCyeleForm2 = () => {
  return (
    <FormProvider>
      <Form
        actions={actions}
        labelCol={5}
        wrapperCol={14}
        effects={($, { setFieldState }) => {
          $('customEvent').subscribe(() => {
            setFieldState('cc', state => {
              state.visible = !state.visible
            })
          })
        }}
      >
        <FormItem label="BB" name="bb" component={Input} />
        <FormItem label="CC" name="cc" component={Input} />
        <FormButtonGroup offset={5}>
          <Submit>查询</Submit>
          <Reset>重置</Reset>
        </FormButtonGroup>
        <FormSpy
          initialState={{
            actions: []
          }}
          reducer={(state, action) => {
            return {
              actions: state.actions.concat(action)
            }
          }}
        >
          {({ state }) => {
            const { actions } = state
            return (
              <div>
                全量生命周期
                <div
                  style={{
                    margin: 20,
                    height: 100,
                    overflow: 'auto',
                    border: '1px solid red',
                    padding: 10
                  }}
                >
                  {(actions || []).map((action, key) => {
                    return <div key={key}>{action.type}</div>
                  })}
                </div>
              </div>
            )
          }}
        </FormSpy>
        <FormSpy
          selector="*(onFormChange,onFieldChange)"
          initialState={{
            actions: []
          }}
          reducer={(state, action) => {
            return {
              actions: state.actions.concat(action)
            }
          }}
        >
          {({ state }) => {
            const { actions } = state
            return (
              <div>
                指定生命周期
                <div
                  style={{
                    margin: 20,
                    height: 100,
                    overflow: 'auto',
                    border: '1px solid red',
                    padding: 10
                  }}
                >
                  {(actions || []).map((action, key) => {
                    return <div key={key}>{action.type}</div>
                  })}
                </div>
              </div>
            )
          }}
        </FormSpy>
      </Form>
      <FormSpy
        selector="customEvent"
        initialState={{
          actions: []
        }}
        reducer={(state, action) => {
          return {
            actions: state.actions.concat(action)
          }
        }}
      >
        {({ state }) => {
          const { actions } = state
          return (
            <div>
              指定生命周期
              <div
                style={{
                  margin: 20,
                  height: 100,
                  overflow: 'auto',
                  border: '1px solid red',
                  padding: 10
                }}
              >
                {(actions || []).map((action, key) => {
                  return <div key={key}>{action.type}</div>
                })}
              </div>
            </div>
          )
        }}
      </FormSpy>
      <FormButtonGroup align="center">
        <Button
          onClick={() => {
            actions.dispatch('customEvent')
          }}
        >
          自定义生命周期
        </Button>
      </FormButtonGroup>
    </FormProvider>
  )
}
export default LifeCyeleForm2;