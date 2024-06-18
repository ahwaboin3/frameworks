package com.cardatabase.cardatabase.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Entity
public class Owner {
	//car 테이블과 일대다 관계에 있는 owner라는 새 엔티티를 추가 한다
	//일대다 관꼐라는 것은 소유자 한 명이 자동차 여러 대를 가질 수 있지만
	//한 자동차의 소유자는 한 명이라는 뜻이다.
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long ownerid;
	private String firstname, lastname;

}
