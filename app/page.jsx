'use client'

import { useState } from 'react'
import { ConfigProvider, Form, Input, Radio, theme, Typography } from 'antd'
import { TaskList, Community } from '@pea-ai/growth-sdk'
import '@pea-ai/growth-sdk/dist/style.css'

export default function Home() {
  const [values, setValues] = useState({
    questId: '66a2427aefe7f900111f0a74',
    token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2Njc1NDhkYzlmYTNkMDAwMTE1NWI3NDEiLCJpYXQiOjE3MjE4OTI2MjIsImV4cCI6MTcyNDQ4NDYyMn0.7fv0mh3Lfv6utnMFwV9KAyaAvLK54QpsKsT9cM5HCZo`,
    theme: 'dark',
    handle: 'bevm',
  })

  return (
    <div className="bg-[#080908] flex min-h-screen w-screen justify-center p-6">
      <div className="flex flex-col gap-6">
        <Typography.Title level={2} className="text-white text-center">
          SDK Demo
        </Typography.Title>
        <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
          <Form
            labelCol={{ span: 3 }}
            labelAlign="left"
            initialValues={values}
            onValuesChange={(changedValues, allValues) => {
              setValues(allValues)
            }}
          >
            <Form.Item label="Handle" name="handle">
              <Input />
            </Form.Item>
            <Form.Item label="Quest ID" name="questId">
              <Input />
            </Form.Item>
            <Form.Item label="Token" name="token">
              <Input.TextArea />
            </Form.Item>
            <Form.Item label="Theme" name="theme">
              <Radio.Group>
                <Radio value="light">Light</Radio>
                <Radio value="dark">Dark</Radio>
              </Radio.Group>
            </Form.Item>
          </Form>
        </ConfigProvider>

        <div className="flex gap-6">
          <div>
            <Typography.Title level={3} className="text-white text-center">
              Community
            </Typography.Title>
            <div className="rounded-2xl border border-[#2A2A2A] bg-[#151617] w-96 mt-6 overflow-hidden">
              <Community handle={values.handle} theme={values.theme} />
            </div>
          </div>

          <div>
            <Typography.Title level={3} className="text-white text-center">
              Task List
            </Typography.Title>
            <div className="rounded-2xl border border-[#2A2A2A] bg-[#151617] w-96 mt-6 overflow-hidden">
              <TaskList
                questId={values.questId}
                token={values.token}
                theme={values.theme}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
