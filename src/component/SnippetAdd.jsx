import React, { Component } from 'react';
import { Form, Input, Button, Col, Row, message } from 'antd';

import requestData from "../common/Request";
import config from "../config/config";

const FormItem = Form.Item;


const SnippetAdd = React.createClass({
  
  resetHandler(e) {
      e.preventDefault();
      this.props.form.resetFields();
  },

  submitHandler(e) {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
          if (!!err) {
              return;                
          }

          const respData = requestData(config.saveSnippet, values, 'POST');
          if (respData) {
              message.success('新增成功');
          } else {
              if(respData.content != undefined && respData.content != "") {
                message.error('提交失败,' + respData.content);
              } else {
                message.error('提交失败');
              }
          }
      });
  },

  render() {
    const { getFieldProps } = this.props.form;

    const tagProp = getFieldProps('tag', {
                                        rules: [{
                                            required: true,
                                            message: '请输入tag'
                                        }]
                                    });
    const contentProp = getFieldProps('content', {
                                        rules: [{
                                            required: true,
                                            message: '请输入content'
                                        }]
                                    });
    const descProp = getFieldProps('description');
    const langProp = getFieldProps('language');

    const formItemLayout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 18 },
    };

    return (
      <Form horizontal onSubmit={this.submitHandler} form={this.props.form}>
        <Row>
            <Col span={8}>
                <FormItem
                    {...formItemLayout}
                    label="tag："
                >
                    <Input {...tagProp} placeholder="react java c++" />
                </FormItem>
            </Col>
            <Col span={6}>
                <FormItem
                    {...formItemLayout}
                    label="language："
                >
                    <Input {...langProp} placeholder="java" />
                </FormItem>
            </Col>
        </Row>
        <Row>
            <Col span={24}>
                <FormItem
                    {...formItemLayout}
                    label="content："
                >
                    <Input {...contentProp}/>
                </FormItem>
            </Col>
        </Row>
        <Row>
            <Col span={24}>
                <FormItem
                    {...formItemLayout}
                    label="description："
                >
                    <Input {...descProp} placeholder="描述"/>
                </FormItem>
            </Col>
        </Row>
        <Row>
            <Col>
                <FormItem>
                    <Button type="primary" htmlType="submit">确定</Button>
                    <Button type="ghost" onClick={this.resetHandler}>重置</Button>
                </FormItem>
            </Col>
        </Row>
    </Form>
    );
  },
});

const SnippetAddForm = Form.create()(SnippetAdd);

export default SnippetAddForm;
