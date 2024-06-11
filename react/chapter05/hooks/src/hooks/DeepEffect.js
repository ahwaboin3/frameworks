// hooks/DeepEffect.js
/* 의존 관계를 깊이 검사하기
지금까지는 배열에 추가한 의존 관계는 문자열뿐이었다. 문자열, 수 등의 자바스크립트 기본 타입은 비교가능하다. 우리가 일반적으로 예상할 수 있는대로 어떤 문자열이 다른 문자열과 동등한지 비교 할 수 있다.
*/

export const useAnyKeyToRender=()=>{
    if("gnar"==="gnar"){
        console.log("gnarly!!")
    }
    /* 객체, 배열, 함수 등을 비교하려고 하면 비교 방법이 달라진다. 예를 들어 두 배열을 비교해보자. 
    불변의 특성, immutable
    배열의 길이나 원소가 모두 같지만 이 두 배열은 같지 않다. 이유는 이 둘이 서로 같아보이지만 서로 다른 배열 인스턴스이기 때문이다. 자바스크립트에서 배열, 객체, 함수는 서로 같은 인스턴스일 때만 서로 같다. 그렇다면 이 사실이 useEffect 의존 관계 배열과 어떤 관계가 있을까?
    */
    if([1,2,3]!==[1,2,3]){
        console.log("두 배열은 같지만 서로 같지 않다")
    }
    /* 키보드가 눌릴 때마다 컴포넌를 다시 렌더링하는 훅을 만들자 */
}