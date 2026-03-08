## Cấu trúc mới — Rõ ràng, dễ hiểu

| File | Vai trò | Bạn có cần sửa không? |
|---|---|---|
| **`data.js`** | Toàn bộ nội dung app | ✅ **Sửa ở đây** |
| `manifest.json` | Tên app khi Add to Home | Chỉ sửa `short_name` |
| `index.html` | Giao diện khách hàng | ❌ Không cần đụng |
| `admin.html` | Trang quản lý Admin | ❌ Không cần đụng |
| `sw.js` | Hỗ trợ offline | ❌ Không cần đụng |

---

## Nguyên tắc hoạt động

```
data.js         → Nguồn gốc dữ liệu (GitHub)
    ↓
Admin Panel     → Ghi đè lên localStorage (nhanh, tiện)
    ↓
index.html      → Ưu tiên localStorage, fallback về data.js
```

Khi bạn sửa trên **Admin Panel** → cập nhật ngay tức thì. Khi bạn sửa **data.js** trên GitHub → đây là bản backup/gốc, có hiệu lực sau khi người dùng xoá cache.
