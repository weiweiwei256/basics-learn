import React from "react";
import { Form, FormItem,useFormTableQuery, FormButtonGroup, Reset, Submit } from "@formily/antd";
import { fetch } from 'mfetch'
import {Input} from '@formily/antd-components'
import { Table } from "antd";
import 'antd/dist/antd.css'
const service = ({ values, pagination, sorter = {}, filters = {} }) => {
  console.log('args',{ values, pagination, sorter , filters }); 
  return fetch({
    url: 'https://randomuser.me/api',
    data: {
      results: 10,
      sortField: sorter.field,
      sortOrder: sorter.order,
      page: pagination.current,
      ...values,
      ...filters
    }
  })
    .then(res => res.json())
    .then(({ results, info }) => {
      console.log('results',results);
      return {
        dataSource: results,
        ...pagination,
        total: 50
      }
    })
}
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: true,
    render: name => `${name.first}-${name.last}`,
    width: '20%'
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    filters: [
      { text: 'Male', value: 'male' },
      { text: 'Female', value: 'female' }
    ],
    width: '20%'
  },
  {
    title: 'Email',
    dataIndex: 'email'
  }
]
const QueryForm = () => {
  const { form, table } = useFormTableQuery(service)
  console.dir('form',form)
  console.dir('table',table)
  return (
    <div>
      <p>This is query form</p>
      <Form {...form}  style={{ marginBottom: 20 }} inline
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
      <Table {...table}
        columns={columns}
        rowKey={record => record.login.uuid}>
      </Table>
    </div>
  );
};
export default QueryForm;
