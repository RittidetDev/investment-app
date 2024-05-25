"use client";
import { useState } from 'react';
import { Button, Col, Container, Dropdown, DropdownButton, Row, Tab, Tabs } from 'react-bootstrap';

export default function Home() {

  const approveList = [
    {
      key: 'all',
      val: '승인여부 전체'
    },
    {
      key: 'wait',
      val: '승인대기'
    },
    {
      key: 'success',
      val: '승인완료'
    },
    {
      key: 'reject',
      val: '승인거부'
    }
  ]
  const [approveSelected, setApproveSelected] = useState(approveList[0].key)

  const dateList = [
    {
      key: 'register_date',
      val: '신청일시순'
    },
    {
      key: 'approve_date',
      val: '승인일시순'
    }
  ]
  const [dateSelected, setDateSelected] = useState(dateList[0].key)

  const perPageList = [
    {
      key: '25',
      val: '25개씩 보기'
    },
    {
      key: '50',
      val: '50개씩 보기'
    },
    {
      key: '75',
      val: '75개씩 보기'
    },
    {
      key: '100',
      val: '100개씩 보기'
    }
  ]
  const [perPageSelected, setPerPageSelected] = useState(perPageList[0].key)

  const changeApproveList = [
    {
      key: 'approve',
      val: '승인완료'
    },
    {
      key: 'reject',
      val: '승인거부'
    }
  ]
  const [changeApproveSelected, setChangeApproveSelected] = useState(changeApproveList[0].key)

  const renderDropdown = (list, state, setState) => {

    const title = list.find(el => el.key == state)

    return (
      <DropdownButton
        title={title.val}
        onSelect={(selected) => setState(selected)}
      >
        {
          list.map((item, index) => (
            <Dropdown.Item
              key={`dropdown-${index}`}
              eventKey={item.key}
              active={state == item.key}
            >
              {item.val}
            </Dropdown.Item>
          ))
        }
      </DropdownButton>
    )
  }

  return (
    <Container style={{ marginTop: 20, marginBottom: 20 }}>
      <Tabs
        defaultActiveKey="member"
        transition={false}
        className="mb-5"
        variant='pills'
        fill
      >
        <Tab eventKey="home" title="기본정보 관리">
          기본정보 관리
        </Tab>
        <Tab eventKey="member" title="투자유형 관리">
          <Row>
            <Col xs={7}>
              신청 목록 (총 100명 | 승인대기 1건)
            </Col>
            <Col xs={5}>
              <Row>
                <Col xs={4}>
                  {renderDropdown(approveList, approveSelected, setApproveSelected)}
                </Col>
                <Col xs={4}>
                  {renderDropdown(dateList, dateSelected, setDateSelected)}
                </Col>
                <Col xs={4}>
                  {renderDropdown(perPageList, perPageSelected, setPerPageSelected)}
                </Col>
              </Row>
            </Col>
          </Row>
          <div style={{ borderBottom: '1px solid #D7D8DA', marginTop: 12, marginBottom: 12 }} />
          <Row>
            <Col xs={5}>
              <Row>
                <Col xs={3}>
                  <Button variant="primary" active style={{ width: '100%' }}>
                    등록
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col xs={2} />
            <Col xs={5}>
              <Row>
                <Col style={{ textAlign: 'right', alignSelf: 'center' }}>
                  선택한 0건
                </Col>
                <Col xs={4}>
                  {renderDropdown(changeApproveList, changeApproveSelected, setChangeApproveSelected)}
                </Col>
                <Col xs={3}>
                  <Button variant="primary" active style={{ width: '100%' }}>
                    등록
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Tab>
        <Tab eventKey="transfer" title="입출금내역 조회">
          입출금내역 조회
        </Tab>
        <Tab eventKey="history" title="영업내역 조회">
          영업내역 조회
        </Tab>
        <Tab eventKey="detail" title="투자내역 조회">
          투자내역 조회
        </Tab>
        <Tab eventKey="bond" title="채권내역 조회">
          채권내역 조회
        </Tab>
        <Tab eventKey="sms" title="SMS 관리">
          SMS 관리
        </Tab>
        <Tab eventKey="consult" title="상담내역 관리">
          상담내역 관리
        </Tab>
        <Tab eventKey="inquire" title="1:1문의내역 조회">
          1:1문의내역 조회
        </Tab>
      </Tabs>
    </Container>
  );
}