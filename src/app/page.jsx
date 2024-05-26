"use client";
import { useEffect, useRef, useState } from 'react';
import { Button, Col, Container, Dropdown, DropdownButton, Form, Image, InputGroup, Modal, Pagination, Row, Tab, Table, Tabs } from 'react-bootstrap';
import { CircleFill, ExclamationCircleFill, X } from 'react-bootstrap-icons';

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
      'username': 'abc111',
      'name': '111',
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
      'username': 'abc222',
      'name': '222',
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
      'username': 'abc333',
      'name': '333',
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
      'username': 'abc444',
      'name': '444',
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

  const [dataSelected, setDataSelected] = useState([])

  const [username, setUsername] = useState('')
  const [name, setName] = useState('')
  const [fileSelected, setFileSelected] = useState([])
  const hiddenFileInput = useRef(null)

  const [modalAddDataShow, setModalAddDataShow] = useState(false)

  const handleCloseAddData = () => {
    setModalAddDataShow(false)
    setFileSelected([])
    setInvestmentTypeSelected(investmentTypeList[0].key)
    setUsername('')
    setName('')
  }

  const handleShowAddData = () => setModalAddDataShow(true)

  const [modalRejectDataShow, setModalRejectDataShow] = useState(false)

  const [reasonReject, setReasonReject] = useState('')
  const [reasonDescription, setReasonDescription] = useState('')
  const [isCheckReason, setIsCheckReason] = useState(false)

  const handleCloseRejectData = () => {
    setModalRejectDataShow(false)
    setIsCheckReason(false)
    setUsername('')
    setName('')
    setReasonReject('')
    setReasonDescription('')
  }

  const handleShowRejectData = () => {
    const usernames = dataSelected.map(el => el.username).join(', ')
    const names = dataSelected.map(el => el.name).join(', ')
    setUsername(usernames)
    setName(names)
    setModalRejectDataShow(true)
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

  const [modalAlertShow, setModalAlertShow] = useState(false)

  const [alertDescription, setAlertDescription] = useState({
    icon: 'warning',
    text: '선택된 신청건이 없습니다.'
  })

  const handleCloseAlert = () => {
    setModalAlertShow(false)
    if (alertDescription.callback) {
      alertDescription.callback()
    }
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
      reject: {
        background_color: '#FEE2E2',
        color: '#991B1B',
        label: '승인거부'
      },
      success: {
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

    const arraysEqual = (a1, a2) => {
      return JSON.stringify(a1) == JSON.stringify(a2);
    }

    return (
      <Table className='mt-3' style={{
        display: 'block',
        overflowX: 'auto',
        whiteSpace: 'nowrap'
      }}>
        <thead>
          <tr>
            <th style={{ width: '3rem' }}>
              <input
                type="checkbox"
                checked={arraysEqual(dataSelected, dataPerPage[currentIndexPage])}
                onClick={() => arraysEqual(dataSelected, dataPerPage[currentIndexPage])
                  ? setDataSelected([])
                  : setDataSelected(dataPerPage[currentIndexPage])}
              />
            </th>
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
                  <td style={{ width: '3rem' }}>
                    <input
                      type="checkbox"
                      checked={dataSelected.find(el => el.username == member.username) != undefined}
                      onClick={() => dataSelected.find(el => el.username == member.username)
                        ? setDataSelected(dataSelected.filter(el => el.username != member.username))
                        : setDataSelected([...dataSelected, member])}
                    />
                  </td>
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

  const renderInputTextGroup = (label, fieldName, state = '', setState, isDisabled = false, width = '15%') => {
    return (
      <InputGroup>
        <InputGroup.Text id={fieldName} style={{ backgroundColor: '#EBEEF3', borderRadius: 0, width: width }}>
          {label}
        </InputGroup.Text>
        <Form.Control
          aria-describedby={fieldName}
          style={{ borderRadius: 0, pointerEvents: isDisabled ? 'none' : 'visible' }}
          value={`${state}`}
          onChange={(event) => setState(event.target.value)}
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

  const bytesToMegaBytes = bytes => bytes / (1024 * 1024)

  const onSubmitAddData = () => {
    try {
      setAlertDescription({
        icon: 'success',
        text: '저장되었습니다.'
      })
      setModalAlertShow(true)
      handleCloseAddData()
    } catch (err) {
      setAlertDescription({
        icon: 'warning',
        text: '파일 등록에 실패하였습니다.'
      })
      setModalAlertShow(true)
    }
  }

  const handleSubmitAddData = () => {
    setModalAddDataShow(false)
    const findNotAllow = fileSelected.filter(el =>
      (el.name).match(/^.*jpg$/) || (el.name).match(/^.*jpeg$/) ||
      (el.name).match(/^.*gif$/) || (el.name).match(/^.*png$/) ||
      (el.name).match(/^.*pdf$/)
    )
    const findOverSize = fileSelected.filter(el => bytesToMegaBytes(el.size) > 100)
    if (username.length == 0 || name.length == 0) {
      setAlertDescription({
        icon: 'warning',
        text: '필수입력항목을 입력해주세요.',
        callback: () => setModalAddDataShow(true)
      })
      setModalAlertShow(true)
    } else if (findNotAllow.length > 0) {
      setAlertDescription({
        icon: 'warning',
        text: 'jpg, jpeg, gif, png, pdf 파일만 등록 가능합니다.',
        callback: () => setModalAddDataShow(true)
      })
      setModalAlertShow(true)
    } else if (fileSelected.length > 10) {
      setAlertDescription({
        icon: 'warning',
        text: '최대 10개까지 등록 가능합니다.',
        callback: () => setModalAddDataShow(true)
      })
      setModalAlertShow(true)
    } else if (findOverSize.length > 0) {
      setAlertDescription({
        icon: 'warning',
        text: '최대 100MB까지 등록 가능합니다.',
        callback: () => setModalAddDataShow(true)
      })
      setModalAlertShow(true)
    } else {
      setAlertDescription({
        icon: 'warning',
        text: '투자유형을 변경하시겠습니까?',
        callback: () => setModalAddDataShow(true),
        callFn: () => onSubmitAddData()
      })
      setModalAlertShow(true)
    }
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
          {renderInputTextGroup('회원번호', 'username', username, setUsername)}
          {renderInputTextGroup('회원명/법인명', 'name', name, setName)}
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
          // accept='image/*'
          />
        </Modal.Body>
        <Modal.Footer style={{ display: "flex", justifyContent: "center" }}>
          <Button variant='primary' style={{ width: '8rem' }} active onClick={handleSubmitAddData}>
            저장
          </Button>
          <Button variant='light' style={{ width: '8rem', borderColor: '#2A3958', backgroundColor: '#FFFFFF' }} onClick={handleCloseAddData}>
            취소
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }

  const onSubmitRejectData = () => {
    setAlertDescription({
      icon: 'success',
      text: '저장되었습니다.'
    })
    setModalAlertShow(true)
    handleCloseRejectData()
  }

  const onCheckReasonClick = () => {
    setModalRejectDataShow(false)
    setAlertDescription({
      icon: 'warning',
      text: '선택된 2명의 승인상태를 변경하시겠습니까?',
      callback: () => setModalRejectDataShow(true),
      callFn: () => onSubmitRejectData()
    })
    setModalAlertShow(true)
  }

  const handleSubmitRejectData = () => {
    setModalRejectDataShow(false)

    const successMembers = dataSelected.filter(el => el.approve_status == 'success')
    const rejectMembers = dataSelected.filter(el => el.approve_status == 'reject')

    console.log(successMembers, rejectMembers)

    if (reasonReject.length == 0 || (reasonReject == 'reason-other' && reasonDescription.length == 0)) {
      setAlertDescription({
        icon: 'warning',
        text: '필수입력항목을 입력해주세요.',
        callback: () => setModalRejectDataShow(true)
      })
      setModalAlertShow(true)
    } else if (successMembers.length > 0) {
      setAlertDescription({
        icon: 'warning',
        text: '이미 승인 완료된 회원입니다.',
        callback: () => setModalRejectDataShow(true)
      })
      setModalAlertShow(true)
    } else if (rejectMembers.length > 0) {
      setAlertDescription({
        icon: 'warning',
        text: '이미 승인 거부된 회원입니다.',
        callback: () => setModalRejectDataShow(true)
      })
      setModalAlertShow(true)
    } else {
      setModalRejectDataShow(true)
      setIsCheckReason(true)
    }
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
          {renderInputTextGroup('회원번호', 'username', username, setUsername, true)}
          {renderInputTextGroup('회원명/법인명', 'name', name, setName, true)}
          {renderInputCheckboxGroup('승인거부 사유', true)}
          {
            isCheckReason ? (
              <Row className='mt-3'>
                <Col xs={6} style={{ paddingRight: 0 }}>
                  {renderInputTextGroup('최근저장일시', 'approved_at', '2022-01-01 09:00:00', null, true, '30%')}
                </Col>
                <Col xs={6}>
                  {renderInputTextGroup('관리자', 'approved_by', '김관리자', null, true, '30%')}
                </Col>
              </Row>
            ) : null
          }
        </Modal.Body>
        <Modal.Footer style={{ display: "flex", justifyContent: "center" }}>
          {
            isCheckReason ? (
              <Button variant='primary' style={{ width: '8rem' }} active onClick={onCheckReasonClick}>
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

  const renderAlertModal = () => {

    const svgIcon = {
      'warning': (
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="30" height="30" rx="15" fill="#FEF0C7" />
          <rect x="2" y="2" width="30" height="30" rx="15" stroke="#FFFAEB" stroke-width="4" />
          <path d="M15.5166 17.6853C15.5736 18.2785 15.6702 18.7194 15.803 19.0102C15.9376 19.3002 16.1764 19.4448 16.5212 19.4448C16.5856 19.4448 16.6433 19.4347 16.7005 19.423C16.7591 19.4347 16.8165 19.4448 16.8814 19.4448C17.2252 19.4448 17.4648 19.3002 17.5986 19.0102C17.7322 18.7194 17.8271 18.2785 17.8852 17.6853L18.1913 13.1052C18.2483 12.2124 18.2773 11.5719 18.2773 11.183C18.2773 10.6538 18.1393 10.2409 17.8623 9.94437C17.5843 9.64789 17.2191 9.5 16.7668 9.5C16.7427 9.5 16.7246 9.50539 16.7009 9.50633C16.6784 9.50539 16.6599 9.5 16.6365 9.5C16.1832 9.5 15.8187 9.64789 15.5412 9.94437C15.264 10.2413 15.125 10.6545 15.125 11.1833C15.125 11.5721 15.1534 12.2127 15.2113 13.1054L15.5166 17.6853ZM16.7124 21.1189C16.2732 21.1189 15.9001 21.2574 15.5902 21.5345C15.2806 21.8117 15.1255 22.1483 15.1255 22.5434C15.1255 22.9895 15.2825 23.3405 15.5942 23.5955C15.9073 23.8505 16.2725 23.978 16.6899 23.978C17.1148 23.978 17.4854 23.8524 17.8023 23.6005C18.1187 23.3492 18.2769 22.9963 18.2769 22.5439C18.2769 22.1488 18.1255 21.8122 17.8227 21.5349C17.5198 21.2574 17.1498 21.1189 16.7117 21.1189" fill="#D46B08" />
        </svg>
      ),
      'success': (
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="30" height="30" rx="15" fill="#D1FADF" />
          <rect x="2" y="2" width="30" height="30" rx="15" stroke="#ECFDF3" stroke-width="4" />
          <g clip-path="url(#clip0_1_2220)">
            <path d="M13.25 17L15.75 19.5L20.75 14.5M25.3333 17C25.3333 21.6023 21.6023 25.3333 17 25.3333C12.3976 25.3333 8.66663 21.6023 8.66663 17C8.66663 12.3976 12.3976 8.66663 17 8.66663C21.6023 8.66663 25.3333 12.3976 25.3333 17Z" stroke="#039855" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </g>
          <defs>
            <clipPath id="clip0_1_2220">
              <rect width="20" height="20" fill="white" transform="translate(7 7)" />
            </clipPath>
          </defs>
        </svg>
      )
    }

    return (
      <Modal
        size='sm'
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={modalAlertShow}
        onHide={handleCloseAlert}
      >
        <Modal.Body>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {svgIcon[alertDescription.icon]}
            <X
              color='#667085'
              size={24}
              style={{
                cursor: 'pointer'
              }}
            />
          </div>
          <div className='mt-3 mb-4'>
            {alertDescription.text}
          </div>
          <div style={{ textAlign: 'center' }}>
            {
              alertDescription.callFn ? (
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Button variant='primary' style={{ width: '48%' }} active onClick={alertDescription.callFn}>
                    확인
                  </Button>
                  <Button variant='light' style={{ width: '48%', borderColor: '#2A3958', backgroundColor: '#FFFFFF' }} onClick={handleCloseAlert}>
                    취소
                  </Button>
                </div>
              ) : (
                <Button variant='primary' style={{ width: '48%' }} active onClick={handleCloseAlert}>
                  확인
                </Button>
              )
            }
          </div>
        </Modal.Body>
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
          {renderAlertModal()}
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