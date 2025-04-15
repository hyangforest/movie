import { useState, useEffect, useCallback } from 'react';

export const useFetch = (fetchFunction, initialData = []) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      // 로딩 스타일 테스트
      // await new Promise((res) => setTimeout(res, 500)); 
      // const result = await fetchFunction();
      // setData(result);

      const result = await fetchFunction();
      setData(result);
    } catch (err) {
      //console.error('AxiosError :', err);
      let message;

      if (err.response?.status === 404) {
        message = '요청하신 페이지를 찾을 수 없습니다.';
      } else if (err.response?.status === 401) {
        message = '인증이 필요합니다. 로그인 해주세요.';
      } else {
        message = '서버 내부 오류가 발생했습니다.';
      }
      setError(message);
    } finally {
      setLoading(false);
    }
  }, initialData);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
}