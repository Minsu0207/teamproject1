import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Svg } from 'react-native-svg'

export default function Desktop2 () {
  return (
    <View style={Desktop2Styles.Desktop2}>
      <Svg id='Rectangle2' />
      <Text style={Desktop2Styles.}>
         운전 습관 분석을통한 안전운전 평가
      </Text>
      <Text style={Desktop2Styles.}>
        차량번호을 입력해주세요.
      </Text>
      <View style={Desktop2Styles.Group4}>
        <View style={Desktop2Styles.Rectangle3} />
        <Text style={Desktop2Styles.362146}>
          36주 2146
        </Text>
      </View>
      <Image /* source={require('./image5.png')} */ />
      <View style={Desktop2Styles.Group3}>
        <View style={Desktop2Styles.Rectangle4} />
        <Text style={Desktop2Styles.19250km3215123Rpm720072kmh53}>
          총 주행거리 : 19,250km
차량등록번호:3215123
평균 Rpm: 7200
평균 속도 : 72km/h
급 감속 횟수 : 5회
금 정지 횟수 : 3회

        </Text>
      </View>
      <Image /* source={require('./image8.png')} */ />
      <Text style={Desktop2Styles.}>
        차량 운행정보
      </Text>
      <Text style={Desktop2Styles.}>
        차량 상세정보
      </Text>
      <Text style={Desktop2Styles.}>
        불안전 운행정보
      </Text>
      <Text style={Desktop2Styles.}>
        군집 분석 결과
      </Text>
      <View style={Desktop2Styles.Group5}>
        <View style={Desktop2Styles.Rectangle5} />
        <Text style={Desktop2Styles.}>
          나의 운전습관 확인
        </Text>
        <Text style={Desktop2Styles.362146}>
          36주 2146 차량의 
안전 수치는 위험단계 입니다.
        </Text>
        <Image /* source={require('./image7.png')} */ />
      </View>
      <Image /* source={require('./image9.png')} */ />
      <View style={Desktop2Styles.Rectangle6} />
      <Text style={Desktop2Styles.}>
        조회
      </Text>
      <View style={Desktop2Styles.Rectangle7} />
      <Text style={Desktop2Styles.}>
        홈으로
      </Text>
    </View>
  )
}

const Desktop2Styles = StyleSheet.create({
  Desktop2: {
    position: 'relative',
    width: 90,
    height: 64,
    backgroundColor: '#afafaf',
  },
  : {
    position: 'absolute',
    left: 13.81,
    top: 4.19,
    width: 55.44,
    height: 4.38,
    color: '#ffffff',
    fontFamily: 'Inter, sans-serif',
    fontSize: 3.13,
    fontWeight: '100',
    lineHeight: 3.78,
    textAlign: 'center',
  },
  : {
    position: 'absolute',
    left: 8.69,
    top: 16,
    width: 35.13,
    height: 3.69,
    color: '#000000',
    fontFamily: 'Inter, sans-serif',
    fontSize: 3.13,
    fontWeight: '100',
    lineHeight: 3.78,
    textAlign: 'center',
  },
  Group4: {
    position: 'absolute',
    left: 44.56,
    top: 16,
    width: 22.06,
    height: 4.19,
    borderRadius: 1.25,
  },
  Rectangle3: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 22.06,
    height: 4.19,
    backgroundColor: '#000000',
    borderRadius: 1.25,
  },
  362146: {
    position: 'absolute',
    left: 4.38,
    top: 0.38,
    width: 13.31,
    height: 3.38,
    color: '#ffffff',
    fontFamily: 'Inter, sans-serif',
    fontSize: 2.81,
    fontWeight: '300',
    lineHeight: 3.4,
    textAlign: 'center',
  },
  Group3: {
    position: 'absolute',
    left: 50.75,
    top: 24.94,
    width: 26.63,
    height: 17.19,
    borderRadius: 1.25,
  },
  Rectangle4: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 26.63,
    height: 17.19,
    backgroundColor: '#000000',
    borderRadius: 1.25,
  },
  19250km3215123Rpm720072kmh53: {
    position: 'absolute',
    left: 2.25,
    top: 1.25,
    width: 21.44,
    height: 13.69,
    color: '#ffffff',
    fontFamily: 'Inter, sans-serif',
    fontSize: 2,
    fontWeight: '300',
    lineHeight: 2.56,
  },
  : {
    position: 'absolute',
    left: 11.19,
    top: 22.5,
    width: 11.63,
    height: 2.44,
    color: '#000000',
    fontFamily: 'Inter, sans-serif',
    fontSize: 2,
    fontWeight: '100',
    lineHeight: 2.42,
  },
  : {
    position: 'absolute',
    left: 58.06,
    top: 22.5,
    width: 11.63,
    height: 2.44,
    color: '#000000',
    fontFamily: 'Inter, sans-serif',
    fontSize: 2,
    fontWeight: '100',
    lineHeight: 2.42,
  },
  : {
    position: 'absolute',
    left: 9.63,
    top: 43.81,
    width: 14.75,
    height: 2.63,
    color: '#000000',
    fontFamily: 'Inter, sans-serif',
    fontSize: 2,
    fontWeight: '100',
    lineHeight: 2.42,
  },
  : {
    position: 'absolute',
    left: 36.44,
    top: 43.81,
    width: 14.75,
    height: 2.63,
    color: '#000000',
    fontFamily: 'Inter, sans-serif',
    fontSize: 2,
    fontWeight: '100',
    lineHeight: 2.42,
  },
  Group5: {
    position: 'absolute',
    left: 57.38,
    top: 43.81,
    width: 29.06,
    height: 22.94,
    borderRadius: 1.25,
  },
  Rectangle5: {
    position: 'absolute',
    left: 0,
    top: 2.88,
    width: 29.06,
    height: 14.38,
    backgroundColor: '#000000',
    borderRadius: 1.25,
  },
  : {
    position: 'absolute',
    left: 6.44,
    top: 0,
    width: 16.19,
    height: 2.63,
    color: '#000000',
    fontFamily: 'Inter, sans-serif',
    fontSize: 2,
    fontWeight: '100',
    lineHeight: 2.42,
  },
  362146: {
    position: 'absolute',
    left: 2.13,
    top: 11.31,
    width: 24.88,
    height: 11.63,
    color: '#ffffff',
    fontFamily: 'Inter, sans-serif',
    fontSize: 2,
    fontWeight: '300',
    lineHeight: 2.42,
    textAlign: 'center',
  },
  Rectangle6: {
    position: 'absolute',
    left: 68,
    top: 16.56,
    width: 9,
    height: 3.63,
    backgroundColor: '#000000',
    borderRadius: 1.25,
  },
  : {
    position: 'absolute',
    left: 69.88,
    top: 16.63,
    width: 5.19,
    height: 3.38,
    color: '#ffffff',
    fontFamily: 'Inter, sans-serif',
    fontSize: 2.81,
    fontWeight: '300',
    lineHeight: 3.4,
    textAlign: 'center',
  },
  Rectangle7: {
    position: 'absolute',
    left: 78.56,
    top: 16.38,
    width: 9,
    height: 3.63,
    backgroundColor: '#000000',
    borderRadius: 1.25,
  },
  : {
    position: 'absolute',
    left: 79.13,
    top: 16.5,
    width: 7.81,
    height: 3.38,
    color: '#ffffff',
    fontFamily: 'Inter, sans-serif',
    fontSize: 2.81,
    fontWeight: '300',
    lineHeight: 3.4,
    textAlign: 'center',
  },

})
