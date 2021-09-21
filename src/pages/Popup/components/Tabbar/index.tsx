import React from 'react'
import { Tabs } from 'antd'

import css from './Tabbar.module.scss'

const Tabbar: React.FC = () => {
  return (
    <div className={css.tabbar}>
      <h1 className={css.tabbar__header}>Request Modifier</h1>
      <Tabs tabPosition="left" defaultActiveKey="1">
        <Tabs.TabPane tab="Tab 2" />
      </Tabs>
    </div>
  )
}

export default Tabbar