import {AutoComplete, Col, Row, Table} from "antd";
import React, { useState } from "react";
import {TableRowSelection} from "antd/es/table/interface";

export default function TableDesign() {

    interface DataType {
        key: React.Key;
        value: string;
        age: number;
        address: string;
    }

    let columns = [
        {title: 'Name',dataIndex: 'value',key: 'value'},
        {title: 'Age',dataIndex: 'age',key: 'age'},
        {title: 'Address',dataIndex: 'address',key: 'address'},
    ];

    let data = [
        {key: '1',value: 'Ashan',age: 32,address: 'New York No. 1 Lake Park'},
        {key: '2',value: 'Shan',age: 42,address: 'London No. 1 Lake Park'},
        {key: '3',value: 'Kalum',age: 52,address: 'Sidney No. 1 Lake Park'},
        {key: '4',value: 'Akila',age: 60,address: 'kaluthara'},
        {key: '5',value: 'Samith',age: 15,address: 'badulla'},
        {key: '6',value: 'Nimal',age: 35,address: 'kandy'},
        {key: '7',value: 'Ranil',age: 78,address: 'colombo'},
        {key: '8',value: 'Mahinda',age: 59,address: 'monaragala'},
        {key: '9',value: 'Maithree',age: 30,address: 'polonnaruwa'},
        {key: '10',value: 'Akalanka',age: 25,address: 'india'},
    ];

    const onSelectHandle=(eve:any) => {
        console.log("+++++++++++++++++"+eve)
        //let getKey=data.filter(value => value.toLowerCase().includes(eve.toLowerCase()))
        //let x= data.find((value, index, array)=>value===eve ? :value)

        //console.log(x)
        rowSelection.onChange
    }
    // const onSearchHandle=(data:any)=>{
    //     console.log("________________"+data)
    // }

    // const rowSelection = {
    //     onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    //         console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    //     }
    // };

    const rowSelection: TableRowSelection<DataType> = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`);

        },
        onSelect: (record, selected, selectedRows) => {
            console.log(record);
            console.log("_____________________________");
            console.log(selected);
            console.log("=============================");
            console.log(selectedRows);
            console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        },
    }


    return<>
        <div className={"gridStyle"}>
            <Row>
                <Col span={16}>
                    <AutoComplete
                        className={"search"}
                        dropdownMatchSelectWidth={252}
                        allowClear
                        options={data}
                        notFoundContent={"Not Found"}
                        placeholder={"Search here"}

                        filterOption={(inputValue, data) =>
                            data!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                        }
                        onSelect={onSelectHandle}
                        // onSearch={onSearchHandle}
                    />

                </Col>
            </Row>
            <Row style={{height:20}}/>
            <Row>
                <Table columns={columns} dataSource={data} className={"table"} style={{width:800}}
                       rowSelection={{...rowSelection}}
                       pagination={false}//next page number list eka nathi krna
                />;
            </Row>
        </div>

    </>
}