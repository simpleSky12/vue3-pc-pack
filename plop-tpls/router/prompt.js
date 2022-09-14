module.exports = {
  description: '创建路由',
  // prompts: [
  //   {
  //     type: 'list',
  //     name: 'path',
  //     message: '请选择页面创建目录',
  //   },
  //   {
  //     type: 'input',
  //     name: 'name',
  //     message: '请输入模块名称',
  //     validate: (v) => {
  //       if (!v || v.trim === '') {
  //         return '模块名称不能为空';
  //       } else {
  //         return true;
  //       }
  //     },
  //   },
  // ],
  actions: (data) => {
    const actions = [
      {
				type: 'add',
				path: '../src/views/{{ viewName }}/index.vue',
				templateFile: './index.hbs',
				abortOnFail: true,
			},
			{
				type: 'modify',
				path: '../src/router/root.ts',
				pattern: /(\/\/-- append import here --)/gi,
				template:
					"const {{ viewName }} = () => import('../views/{{ viewName }}/index.vue');\n$1",
			},
			{
				type: 'modify',
				path: '../src/router/root.ts',
				pattern: /(\/\/-- append router here --)/gi,
				templateFile: './index.hbs',
			},

// 作者：白雀
// 链接：https://juejin.cn/post/7005576878190755847
// 来源：稀土掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
    ];
    return actions;
  },
};