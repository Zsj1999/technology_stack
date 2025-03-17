<template>
  <div class="weather-box">
    <div v-if="weather" class="weather-content">
      <div class="weather-main">
        <div class="location">
          <span class="location-icon">📍</span>
          <span class="city-name">{{ weather.fullLocation }}</span>
        </div>
        <div class="divider">|</div>
        <div class="weather-info">
          <span class="weather-icon">{{ getWeatherIcon(weather.text) }}</span>
          <span class="temperature">{{ weather.temp }}°</span>
          <span class="weather-text">{{ weather.text }}</span>
        </div>
        <div class="divider">|</div>
        <div class="weather-detail">
          <span title="湿度"><span class="detail-icon">💧</span>{{ weather.humidity }}%</span>
          <span title="风速"><span class="detail-icon">🌪️</span>{{ weather.windSpeed }}km/h</span>
        </div>
      </div>
    </div>
    <div v-else-if="error" class="weather-error">
      <span class="error-icon">⚠️</span>
      <span class="error-text">{{ error }}</span>
    </div>
    <div v-else class="weather-loading">
      <span class="loading-icon">🌤</span>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'

export default defineComponent({
  name: 'CityWeather',
  setup() {
    const weather = ref(null)
    const error = ref(null)
    const KEY = 'adb3d6ca74e34fc994c7d2a174325380'
    const CACHE_KEY = 'weather_cache'
    const CACHE_DURATION = 10 * 60 * 1000 // 10分钟缓存

    const getWeatherIcon = (text) => {
      const iconMap = {
        '晴': '☀️',
        '多云': '⛅️',
        '阴': '☁️',
        '小雨': '🌧',
        '中雨': '🌧',
        '大雨': '⛈',
        '雷阵雨': '⛈',
        '小雪': '🌨',
        '中雪': '🌨',
        '大雪': '❄️',
        '雾': '🌫',
        '霾': '😷'
      };
      return iconMap[text] || '🌤';
    }

    const getCachedWeather = () => {
      const cached = localStorage.getItem(CACHE_KEY)
      if (cached) {
        const { data, timestamp } = JSON.parse(cached)
        if (Date.now() - timestamp < CACHE_DURATION) {
          return data
        }
      }
      return null
    }

    const setCachedWeather = (data) => {
      localStorage.setItem(CACHE_KEY, JSON.stringify({
        data,
        timestamp: Date.now()
      }))
    }

    const getCurrentCity = async () => {
      try {
        // 先尝试读取缓存
        const cached = getCachedWeather()
        if (cached) {
          weather.value = cached
          return
        }

        // 如果没有缓存，则请求新数据
        await getLocationByIP()
      } catch (err) {
        console.error('获取城市失败:', err)
        error.value = '定位服务暂时不可用'
        // 使用默认天气数据
        weather.value = {
          fullLocation: '北京',
          temp: '25',
          text: '晴',
          humidity: '40',
          windSpeed: '3'
        }
      }
    }

    const getLocationByIP = async () => {
      try {
        const mockWeather = {
          fullLocation: '北京',
          temp: '25',
          text: '晴',
          humidity: '40',
          windSpeed: '3'
        }
        weather.value = mockWeather
        setCachedWeather(mockWeather)
      } catch (err) {
        error.value = '天气服务暂时不可用'
        throw err
      }
    }

    const formatFullLocation = (location) => {
      if (location.name !== location.adm2) {
        return `${location.adm2}-${location.name}`;
      }
      return location.name;
    }

    const formatCityName = (name) => {
      return name.replace(/(市|区|县|自治州|特别行政区)$/, '');
    }

    const getWeather = async (cityId, fullLocation) => {
      try {
        console.log('获取天气信息:', fullLocation);
        const url = `https://devapi.qweather.com/v7/weather/now?location=${cityId}&key=${KEY}`;
        const res = await fetch(url);
        const data = await res.json();
        console.log('天气数据:', data);
        
        if (data.code === '200') {
          weather.value = {
            city: fullLocation.split('-')[0],
            fullLocation: fullLocation,
            temp: data.now.temp,
            text: data.now.text,
            humidity: data.now.humidity,
            windSpeed: data.now.windSpeed
          };
          error.value = null;
        } else {
          error.value = '获取天气信息失败';
        }
      } catch (error) {
        console.error('获取天气失败:', error);
        error.value = '天气服务异常';
      }
    }

    const init = async () => {
      try {
        await getCurrentCity()
      } catch (err) {
        console.error('初始化天气组件失败:', err)
      }
    }

    onMounted(() => {
      init()
    })

    return {
      weather,
      error,
      getWeatherIcon
    }
  }
})
</script>

<style scoped>
.weather-box {
  padding: 0.5rem 1rem;
  border-radius: 8px;
  background: var(--c-bg);
  color: var(--c-text);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid var(--c-border);
  font-size: 0.9rem;
  cursor: pointer;
}

.weather-box:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.weather-content {
  display: flex;
  align-items: center;
}

.weather-main {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.location {
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.location-icon {
  font-size: 0.9rem;
  opacity: 0.8;
}

.city-name {
  font-weight: 500;
  max-width: 80px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.divider {
  color: var(--c-border);
  opacity: 0.6;
}

.weather-info {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.weather-icon {
  font-size: 1.2rem;
}

.temperature {
  font-weight: 600;
}

.weather-text {
  font-size: 0.9rem;
  color: var(--c-text-lighter);
}

.weather-detail {
  font-size: 0.85rem;
  color: var(--c-text-lighter);
}

.detail-icon {
  margin-right: 0.2rem;
  opacity: 0.8;
}

.weather-loading {
  padding: 0 0.5rem;
}

.loading-icon {
  font-size: 1.1rem;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% { opacity: 0.6; }
  50% { opacity: 1; }
  100% { opacity: 0.6; }
}

/* 深色模式适配 */
@media (prefers-color-scheme: dark) {
  .weather-box {
    background: rgba(255, 255, 255, 0.05);
  }
}

/* 移动端适配 */
@media (max-width: 719px) {
  .weather-box {
    padding: 0.2rem 0.6rem;
  }
  
  .city-name {
    max-width: 80px;
  }
  
  .weather-detail {
    display: none;
  }
  
  .divider:last-of-type {
    display: none;
  }
  
  .weather-text {
    display: none;  /* 在移动端隐藏天气文字描述 */
  }
}

/* 添加错误状态样式 */
.weather-error {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.3rem 0.8rem;
  color: var(--c-warning);
}

.error-icon {
  font-size: 1rem;
}

.error-text {
  font-size: 0.9rem;
}
</style> 