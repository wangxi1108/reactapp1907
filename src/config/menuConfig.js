const menuList = [
  {
    title: '首页',
    key: '/admin/home',
    icon:'home'
  },
  {
    title: '商品',
    key: '/admin/product',
    icon: 'mail',
    children: [
      {
        title: '商品管理',
        key: '/admin/product',
        icon:'mail'
      },
      {
        title: '品类管理',
        key: '/admin/category',
        icon:'mail'
      }
    ]
  },
  {
    title: '用户管理',
    key: '/admin/user',
    icon:'desktop'
  },
  {
    title: '角色管理',
    key: '/admin/role',
    icon:'inbox'
  },
  {
    title: '图形图表',
    key: '/admin/charts/bar',
    icon: 'appstore',
    children: [
      {
        title: '柱状图',
        key: '/admin/charts/bar',
        icon:'appstore'
      }
    ]
  }
]
export default menuList