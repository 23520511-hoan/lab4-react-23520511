import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Tạo AbortController để hủy request nếu component unmount (cleanup)
        const controller = new AbortController();

        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(url, { signal: controller.signal });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const json = await response.json();
                setData(json);
                setError(null);
            } catch (e) {
                if (e.name !== 'AbortError') {
                    setError(e);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchData();

        // Cleanup function
        return () => {
            controller.abort();
        };
    }, [url]); // Chạy lại khi URL thay đổi

    return { data, loading, error };
};

export default useFetch;