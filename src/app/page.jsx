"use client";
import { useEffect, useRef, useState } from 'react';
import { Button, Col, Container, Dropdown, DropdownButton, Form, Image, InputGroup, Modal, Pagination, Row, Tab, Table, Tabs } from 'react-bootstrap';

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

  const investmentTypeList = [
    {
      key: 'general',
      val: '일반개인'
    },
    {
      key: 'income',
      val: '소득적격'
    },
    {
      key: 'expert',
      val: '개인전문'
    },
    {
      key: 'corp',
      val: '법인'
    },
    {
      key: 'finance',
      val: '여신금융'
    },
    {
      key: 'p2p',
      val: 'P2P온투'
    }
  ]
  const [investmentTypeSelected, setInvestmentTypeSelected] = useState(investmentTypeList[0].key)

  const [memberList, setMemberList] = useState([
    {
      'investment_type': '소득적격',
      'register_type': '개인전문',
      'documents': [
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20200%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18fb4e34934%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18fb4e34934%22%3E%3Crect%20width%3D%22200%22%20height%3D%22200%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2274.421875%22%20y%3D%22104.5%22%3E200x200%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20200%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18fb4e34934%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18fb4e34934%22%3E%3Crect%20width%3D%22200%22%20height%3D%22200%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2274.421875%22%20y%3D%22104.5%22%3E200x200%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20200%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18fb4e34934%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18fb4e34934%22%3E%3Crect%20width%3D%22200%22%20height%3D%22200%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2274.421875%22%20y%3D%22104.5%22%3E200x200%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20200%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18fb4e34934%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18fb4e34934%22%3E%3Crect%20width%3D%22200%22%20height%3D%22200%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2274.421875%22%20y%3D%22104.5%22%3E200x200%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E'
      ],
      'register_dt': '2023-01-10 09:00:00',
      'approve_status': 'wait',
      'reject_reason': '',
      'approved_at': '',
      'approved_by': ''
    },
    {
      'investment_type': '소득적격',
      'register_type': '개인전문',
      'documents': [
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20200%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18fb4e34934%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18fb4e34934%22%3E%3Crect%20width%3D%22200%22%20height%3D%22200%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2274.421875%22%20y%3D%22104.5%22%3E200x200%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20200%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18fb4e34934%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18fb4e34934%22%3E%3Crect%20width%3D%22200%22%20height%3D%22200%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2274.421875%22%20y%3D%22104.5%22%3E200x200%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20200%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18fb4e34934%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18fb4e34934%22%3E%3Crect%20width%3D%22200%22%20height%3D%22200%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2274.421875%22%20y%3D%22104.5%22%3E200x200%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20200%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18fb4e34934%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18fb4e34934%22%3E%3Crect%20width%3D%22200%22%20height%3D%22200%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2274.421875%22%20y%3D%22104.5%22%3E200x200%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E'
      ],
      'register_dt': '2023-01-10 09:00:00',
      'approve_status': 'reject',
      'reject_reason': '서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가',
      'approved_at': '2023-01-10 09:00:00',
      'approved_by': '김관리자'
    },
    {
      'investment_type': '소득적격',
      'register_type': '개인전문',
      'documents': [
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20200%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18fb4e34934%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18fb4e34934%22%3E%3Crect%20width%3D%22200%22%20height%3D%22200%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2274.421875%22%20y%3D%22104.5%22%3E200x200%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20200%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18fb4e34934%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18fb4e34934%22%3E%3Crect%20width%3D%22200%22%20height%3D%22200%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2274.421875%22%20y%3D%22104.5%22%3E200x200%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20200%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18fb4e34934%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18fb4e34934%22%3E%3Crect%20width%3D%22200%22%20height%3D%22200%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2274.421875%22%20y%3D%22104.5%22%3E200x200%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20200%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18fb4e34934%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18fb4e34934%22%3E%3Crect%20width%3D%22200%22%20height%3D%22200%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2274.421875%22%20y%3D%22104.5%22%3E200x200%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E'
      ],
      'register_dt': '2023-01-10 09:00:00',
      'approve_status': 'wait',
      'reject_reason': '',
      'approved_at': '',
      'approved_by': ''
    },
    {
      'investment_type': '소득적격',
      'register_type': '개인전문',
      'documents': [
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20200%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18fb4e34934%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18fb4e34934%22%3E%3Crect%20width%3D%22200%22%20height%3D%22200%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2274.421875%22%20y%3D%22104.5%22%3E200x200%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20200%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18fb4e34934%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18fb4e34934%22%3E%3Crect%20width%3D%22200%22%20height%3D%22200%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2274.421875%22%20y%3D%22104.5%22%3E200x200%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20200%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18fb4e34934%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18fb4e34934%22%3E%3Crect%20width%3D%22200%22%20height%3D%22200%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2274.421875%22%20y%3D%22104.5%22%3E200x200%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20200%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18fb4e34934%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18fb4e34934%22%3E%3Crect%20width%3D%22200%22%20height%3D%22200%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2274.421875%22%20y%3D%22104.5%22%3E200x200%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E'
      ],
      'register_dt': '2023-01-10 09:00:00',
      'approve_status': 'success',
      'reject_reason': '',
      'approved_at': '2023-01-10 09:00:00',
      'approved_by': '김관리자'
    }
  ])
  const [dataPerPage, setDatePerPage] = useState([[]])
  const [currentIndexPage, setCurrentIndexPage] = useState(0)

  const [fileSelected, setFileSelected] = useState([])
  const hiddenFileInput = useRef(null)

  const [modalAddDataShow, setModalAddDataShow] = useState(false)

  const handleCloseAddData = () => {
    setModalAddDataShow(false)
    setFileSelected([])
    setInvestmentTypeSelected(investmentTypeList[0].key)
  }

  const handleShowAddData = () => setModalAddDataShow(true)

  const [modalRejectDataShow, setModalRejectDataShow] = useState(false)

  const [reasonReject, setReasonReject] = useState('')
  const [reasonDescription, setReasonDescription] = useState('')
  const [isCheckReason, setIsCheckReason] = useState(false)

  const handleCloseRejectData = () => {
    setModalRejectDataShow(false)
    setIsCheckReason(false)
    setReasonReject('')
    setReasonDescription('')
  }

  const handleShowRejectData = () => setModalRejectDataShow(true)

  const handleSubmitRejectData = () => {
    setIsCheckReason(true)
  }

  const [modalDocumentDataShow, setModalDocumentDataShow] = useState(false)

  const [documentData, setDocumentData] = useState([])

  const [downloadLink, setDownloadLink] = useState('#')

  const handleCloseDocumentData = () => {
    setModalDocumentDataShow(false)
    // setDocumentData([])
  }

  const handleShowDocumentData = (documents) => {
    setDocumentData(documents)
    setModalDocumentDataShow(true)
  }

  const handleClickChooseFile = () => {
    hiddenFileInput.current.click()
  }

  const handleChooseFile = (event) => {
    const files = event.target.files
    if (files.length > 0) {
      let fileList = []
      for (let i = 0; i < files.length; i++) {
        fileList[i] = {
          name: files[i].name,
          type: files[i].type,
          size: files[i].size
        }
      }
      setFileSelected(fileList)
    }
  }

  useEffect(() => {
    const dataPerPage = memberList.reduce((resultArray, item, index) => {
      const chunkIndex = Math.floor(index / Number(perPageSelected))

      if (!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = [] // start a new chunk
      }

      resultArray[chunkIndex].push(item)

      return resultArray
    }, [])
    setCurrentIndexPage(0)
    setDatePerPage(dataPerPage)
  }, [perPageSelected, memberList])

  const renderDivider = () => {
    return (
      <div style={{ borderBottom: '1px solid #D7D8DA', marginTop: 12, marginBottom: 12 }} />
    )
  }

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

  const renderHeader = () => {
    return (
      <>
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
        {renderDivider()}
        <Row>
          <Col xs={5}>
            <Row>
              <Col xs={3}>
                <Button variant="primary" active style={{ width: '100%' }} onClick={handleShowAddData}>
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
                <Button variant="primary" active style={{ width: '100%' }} onClick={handleShowRejectData}>
                  저장
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </>
    )
  }

  const renderTable = () => {

    const approveStatusColor = {
      wait: {
        background_color: '#FFEDD5',
        color: '#9A3412',
        label: '승인대기'
      },
      success: {
        background_color: '#FEE2E2',
        color: '#991B1B',
        label: '승인거부'
      },
      reject: {
        background_color: '#DCFCE7',
        color: '#166534',
        label: '승인완료'
      }
    }

    const renderApproveStatus = (status) => {
      const approveStatus = approveStatusColor[status]
      return (
        <span
          style={{
            backgroundColor: approveStatus.background_color,
            color: approveStatus.color,
            paddingTop: 4,
            paddingBottom: 4,
            paddingLeft: 12,
            paddingRight: 12,
            borderRadius: 24
          }}
        >
          {approveStatus.label}
        </span>
      )
    }

    return (
      <Table className='mt-3' style={{
        display: 'block',
        overflowX: 'auto',
        whiteSpace: 'nowrap'
      }}>
        <thead>
          <tr>
            <th style={{ width: '3rem' }}><input type="checkbox" /></th>
            <th style={{ width: '4rem' }}>NO</th>
            <th style={{ width: '6rem' }}>기존유형</th>
            <th style={{ width: '6rem' }}>신청유형</th>
            <th style={{ width: '6rem' }}>제출서류</th>
            <th style={{ width: '15rem' }}>신청일시</th>
            <th style={{ width: '6rem' }}>승인여부</th>
            <th style={{ width: '30rem' }}>승인거부 사유</th>
            <th style={{ width: '15rem' }}>승인일시</th>
            <th style={{ width: '6rem' }}>관리자</th>
          </tr>
        </thead>
        <tbody>
          {
            dataPerPage[currentIndexPage]
              ? dataPerPage[currentIndexPage].map((member, index) => (
                <tr key={`member-${index}`}>
                  <td style={{ width: '3rem' }}><input type="checkbox" /></td>
                  <td style={{ width: '4rem' }}>{index + 1}</td>
                  <td style={{ width: '6rem' }}>{member.investment_type}</td>
                  <td style={{ width: '6rem' }}>{member.register_type}</td>
                  <td style={{ width: '6rem' }}>
                    <Button
                      variant='light'
                      style={{
                        width: '4rem',
                        borderColor: '#D7D8DA',
                        backgroundColor: '#EBEEF3',
                        paddingTop: 4,
                        paddingBottom: 4
                      }}
                      onClick={() => handleShowDocumentData(member.documents)}
                    >
                      보기
                    </Button>
                  </td>
                  <td style={{ width: '15rem' }}>{member.register_dt}</td>
                  <td style={{ width: '6rem' }}>
                    {renderApproveStatus(member.approve_status)}
                  </td>
                  <td style={{ width: '30rem', textAlign: 'left' }}>
                    {member.reject_reason}
                  </td>
                  <td style={{ width: '15rem' }}>{member.approved_at}</td>
                  <td style={{ width: '6rem' }}>{member.approved_by}</td>
                </tr>
              ))
              : (
                <tr>
                  <td colSpan={10} style={{ textAlign: 'center', verticalAlign: 'middle', height: '20rem' }}>
                    조회 결과가 없습니다.
                  </td>
                </tr>
              )
          }
        </tbody>
      </Table>
    )
  }

  const renderPagination = () => {
    const prevPage = currentIndexPage - 1 == -1 ? 0 : currentIndexPage - 1
    const nextPage = currentIndexPage + 1 == dataPerPage.length ? dataPerPage.length - 1 : currentIndexPage + 1
    return (
      <Pagination className="justify-content-md-center">
        <Pagination.First
          onClick={() => setCurrentIndexPage(0)}
        />
        <Pagination.Prev
          onClick={() => setCurrentIndexPage(prevPage)}
        />
        {
          dataPerPage.map((page, index) => (
            <Pagination.Item
              key={`pagination-${index}`}
              active={index == currentIndexPage}
              onClick={() => setCurrentIndexPage(index)}
            >
              {index + 1}
            </Pagination.Item>
          ))
        }
        <Pagination.Next
          onClick={() => setCurrentIndexPage(nextPage)}
        />
        <Pagination.Last
          onClick={() => setCurrentIndexPage(dataPerPage.length - 1)}
        />
      </Pagination>
    )
  }

  const renderInputTextGroup = (label, fieldName, val, isDisabled = false, width = '15%') => {
    return (
      <InputGroup>
        <InputGroup.Text id={fieldName} style={{ backgroundColor: '#EBEEF3', borderRadius: 0, width: width }}>
          {label}
        </InputGroup.Text>
        <Form.Control
          aria-describedby={fieldName}
          style={{ borderRadius: 0, pointerEvents: isDisabled ? 'none' : 'visible' }}
          value={`${val}`}
        />
      </InputGroup>
    )
  }

  const renderInputDropdownGroup = (label, isRequire) => {
    return (
      <InputGroup style={{ border: '1px solid #dee2e6' }}>
        <InputGroup.Text style={{ backgroundColor: '#EBEEF3', borderRadius: 0, width: '15%' }}>
          {label}
          {isRequire ? <span style={{ color: 'red', marginLeft: 2, marginTop: -10, fontSize: 10 }}>*</span> : null}
        </InputGroup.Text>
        <Form style={{ width: '15rem', padding: '0.3rem', marginLeft: '0.3rem' }}>
          {renderDropdown(investmentTypeList, investmentTypeSelected, setInvestmentTypeSelected)}
        </Form>
      </InputGroup>
    )
  }

  const renderInputBtnGroup = (label, isRequire) => {
    return (
      <InputGroup style={{ border: '1px solid #dee2e6' }}>
        <InputGroup.Text style={{ backgroundColor: '#EBEEF3', borderRadius: 0, width: '15%' }}>
          {label}
          {isRequire ? <span style={{ color: 'red', marginLeft: 2, marginTop: -10, fontSize: 10 }}>*</span> : null}
        </InputGroup.Text>
        <Form style={{ padding: '0.3rem', marginLeft: '0.3rem' }}>
          <Button
            style={{ width: '100%', color: '#222222', backgroundColor: '#EBEEF3', borderColor: '#D7D8DA' }}
            onClick={handleClickChooseFile}
          >
            파일 선택
          </Button>
        </Form>
        <div style={{
          alignSelf: 'center'
        }}>
          {
            fileSelected.map((file, index) => (
              <span
                key={`file-${index}`}
                style={{
                  marginLeft: index == 0 ? 12 : 30,
                  color: '#5A616A',
                  borderBottom: '1px solid'
                }}
              >
                {file.name}
                <span
                  style={{ position: 'absolute', marginTop: 6, marginLeft: 4, cursor: 'pointer' }}
                  onClick={() => setFileSelected(fileSelected.filter(el => el.name != file.name))}
                >
                  <span className='gg-close' />
                </span>
              </span>
            ))
          }
        </div>
      </InputGroup>
    )
  }

  const renderInputCheckboxGroup = (label, isRequire) => {

    const checkboxList = [
      {
        id: `reason-document-cannot-specified`,
        label: `서류 식별 불가`
      },
      {
        id: `reason-document-require`,
        label: `필수 서류 누락`
      },
      {
        id: `document-not-match-data`,
        label: `서류의 내용이 등록된 회원정보와 다름`
      },
      {
        id: `document-missing-infomation`,
        label: `서류에 누락된 내용이 있음 (필수정보, 회사직인, 본인날인, 본인서명 등)`
      },
      {
        id: `document-period-exceeded`,
        label: `서류의 유효기간이 초과됨`
      },
      {
        id: `reason-other`,
        label: `직접 입력`
      },
    ]

    return (
      <InputGroup style={{ border: '1px solid #dee2e6' }}>
        <InputGroup.Text style={{ backgroundColor: '#EBEEF3', borderRadius: 0, width: '15%' }}>
          {label}
          {isRequire ? <span style={{ color: 'red', marginLeft: 2, marginTop: -10, fontSize: 10 }}>*</span> : null}
        </InputGroup.Text>
        <Form style={{ padding: '1rem', width: '85%' }}>
          {
            checkboxList.map((item, index) => (
              <Form.Check
                key={`checkbox-${index}`}
                type={'checkbox'}
                id={item.id}
                label={item.label}
                checked={reasonReject == item.id}
                onClick={() => setReasonReject(reasonReject == item.id ? '' : item.id)}
                disabled={isCheckReason}
              />
            ))
          }
          <Form.Control
            as="textarea"
            placeholder="사유 입력"
            style={{ height: '100px', marginTop: 12 }}
            disabled={reasonReject != 'reason-other' || isCheckReason}
            readOnly={reasonReject != 'reason-other' || isCheckReason}
            value={reasonDescription}
            onChange={(event) => setReasonDescription(event.target.value)}
          />
        </Form>
      </InputGroup>
    )
  }

  const renderAddDataModal = () => {
    return (
      <Modal
        size='xl'
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={modalAddDataShow}
        onHide={handleCloseAddData}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            투자유형 변경
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {renderInputTextGroup('회원번호', 'username')}
          {renderInputTextGroup('회원명/법인명', 'name')}
          {renderInputDropdownGroup('투자유형', true)}
          {renderInputBtnGroup('서류첨부', true)}
          <div style={{ marginTop: 12, marginBottom: 24 }}>
            <span style={{ fontSize: 14 }}>
              <span style={{ fontSize: 8, marginRight: 12, verticalAlign: 'middle' }}>*</span>
              파일 형식은 jpg, jpeg, gif, png, pdf만 가능합니다.
            </span>
            <br></br>
            <span style={{ fontSize: 14 }}>
              <span style={{ fontSize: 8, marginRight: 12, verticalAlign: 'middle' }}>*</span>
              최대 10개, 100MB까지 등록이 가능합니다.
            </span>
          </div>
          <input
            type="file"
            onChange={handleChooseFile}
            ref={hiddenFileInput}
            multiple
            style={{ display: 'none' }}
            accept='image/*'
          />
        </Modal.Body>
        <Modal.Footer style={{ display: "flex", justifyContent: "center" }}>
          <Button variant='primary' style={{ width: '8rem' }} active onClick={handleCloseAddData}>
            저장
          </Button>
          <Button variant='light' style={{ width: '8rem', borderColor: '#2A3958', backgroundColor: '#FFFFFF' }} onClick={handleCloseAddData}>
            취소
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }

  const renderRejectDataModal = () => {
    return (
      <Modal
        size='xl'
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={modalRejectDataShow}
        onHide={handleCloseRejectData}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            투자유형 변경
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {renderInputTextGroup('회원번호', 'username', 'abc111, abc222', true)}
          {renderInputTextGroup('회원명/법인명', 'name', '김길동, ㈜가나다라투자', true)}
          {renderInputCheckboxGroup('승인거부 사유', true)}
          {
            isCheckReason ? (
              <Row className='mt-3'>
                <Col xs={6} style={{ paddingRight: 0 }}>
                  {renderInputTextGroup('최근저장일시', 'approved_at', '2022-01-01 09:00:00', true, '30%')}
                </Col>
                <Col xs={6}>
                  {renderInputTextGroup('관리자', 'approved_by', '김관리자', true, '30%')}
                </Col>
              </Row>
            ) : null
          }
        </Modal.Body>
        <Modal.Footer style={{ display: "flex", justifyContent: "center" }}>
          {
            isCheckReason ? (
              <Button variant='primary' style={{ width: '8rem' }} active onClick={handleCloseRejectData}>
                확인
              </Button>
            ) : (
              <>
                <Button variant='primary' style={{ width: '8rem' }} active onClick={handleSubmitRejectData}>
                  저장
                </Button>
                <Button variant='light' style={{ width: '8rem', borderColor: '#2A3958', backgroundColor: '#FFFFFF' }} onClick={handleCloseRejectData}>
                  취소
                </Button>
              </>
            )
          }
        </Modal.Footer>
      </Modal>
    )
  }

  const renderDocumentModal = () => {
    return (
      <Modal
        size='lg'
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={modalDocumentDataShow}
        onHide={handleCloseDocumentData}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            서류 보기
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup style={{ border: '1px solid #dee2e6', borderRadius: '0.375rem' }}>
            <InputGroup.Text id='documentModal' style={{ backgroundColor: '#EBEEF3', width: '15%' }}>
              서류
              <span style={{ color: 'red', marginLeft: 2, marginTop: -10, fontSize: 10 }}>*</span>
            </InputGroup.Text>
            <div style={{ width: '85%', textAlign: 'center', overflowY: 'scroll', maxHeight: '40rem' }}>
              {
                documentData.map((url, index) => (
                  <div className={`mb-2 ${index == 0 ? 'mt-2' : ''}`}>
                    <Image
                      key={`document-${index}`}
                      src={url}
                      rounded
                    />
                  </div>
                ))
              }
            </div>
          </InputGroup>
        </Modal.Body>
        <Modal.Footer style={{ display: "flex", justifyContent: "center" }}>
          <Button variant='light' style={{ width: '8rem', borderColor: '#D7D8DA', backgroundColor: '#EBEEF3' }} href={downloadLink} target="_blank">
            파일 다운로드
          </Button>
          <Button variant='primary' style={{ width: '8rem' }} active onClick={handleCloseDocumentData}>
            확인
          </Button>
        </Modal.Footer>
      </Modal>
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
          {renderHeader()}
          {renderTable()}
          {memberList.length > 0 ? renderPagination() : null}
          {renderAddDataModal()}
          {renderRejectDataModal()}
          {renderDocumentModal()}
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