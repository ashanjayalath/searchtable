import {AutoComplete, Card, Col, Input,List, Row, SelectProps, Table} from "antd";
import {useState} from "react";
import Search from "antd/lib/input/Search";

export default function Home() {
    const [search, setSearch] = useState<any>('');

    let columns = [
        {title: 'Name',dataIndex: 'name',key: 'name'},
        {title: 'Age',dataIndex: 'age',key: 'age'},
        {title: 'Address',dataIndex: 'address',key: 'address'},
    ];

    let data = [
        {key: '1',name: 'Ashan',age: 32,address: 'New York No. 1 Lake Park'},
        {key: '2',name: 'Shan',age: 42,address: 'London No. 1 Lake Park'},
        {key: '3',name: 'Kalum',age: 52,address: 'Sidney No. 1 Lake Park'},
        {key: '4',name: 'Akila',age: 60,address: 'kaluthara'},
        {key: '5',name: 'Samith',age: 15,address: 'badulla'},
        {key: '6',name: 'Nimal',age: 35,address: 'kandy'},
        {key: '7',name: 'Ranil',age: 78,address: 'colombo'},
        {key: '8',name: 'Mahinda',age: 59,address: 'monaragala'},
        {key: '9',name: 'Maithree',age: 30,address: 'polonnaruwa'},
        {key: '10',name: 'Akalanka',age: 25,address: 'india'},
    ];

    let nameList=data.map((value) => value["name"])
    let filterNames=nameList;
    if(search){
        filterNames=nameList.filter(value => value.toLowerCase().includes(search.toLowerCase()))
    }

    return<>
        <div className={"gridStyle"} >
            <Row>
                <Col span={16}>
                    <Search onChange={(ele) =>setSearch(ele.target.value)} allowClear enterButton className={"search"}/>
                </Col>

            </Row>
            <Row style={{height:20}}/>
            <Row>
                <Col span={16}>
                    <Table columns={columns} dataSource={data} className={"table"} />
                </Col>
                <Col span={8}>
                    <List className={"list"}
                        bordered
                        dataSource={filterNames}
                        renderItem={item => (
                            <List.Item>{item}</List.Item>
                        )}
                    />
                </Col>
            </Row>
        </div>

    </>
}