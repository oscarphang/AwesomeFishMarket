import React from 'react'
import ScrollArea from 'react-scrollbar';
import { Col } from 'react-bootstrap';

export default function Pane({header,children}) {
    return (
        <Col className={`p-2 rounded menuPage`}>
            {header && <h4 className="text-center">{header}</h4>}
            
        <ScrollArea speed={0.8}
            style={{height:header?"93%":"100%"}}
            className="area pr-2"
            contentClassName="content"
            horizontal={false}>
        {children}
        </ScrollArea>
      </Col>
    )
}
