import React from 'react';
import { Statistic, Card, Row, Col } from 'antd';

const MainStats = ({statTitle, statValue, statColor}) => (
    <Card>
        <Statistic
            title={statTitle}
            value={statValue}
            valueStyle={{
                color: statColor,
            }}
        />
    </Card>
);

export default MainStats;
