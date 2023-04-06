<template>
  <div class="container">
    <Breadcrumb :items="['menu.list', 'menu.list.searchTable']" />
    <a-card class="general-card" :title="$t('menu.list.searchTable')">
      <a-row>
        <a-col :flex="1">
          <a-form
            :model="formModel"
            :label-col-props="{ span: 6 }"
            :wrapper-col-props="{ span: 18 }"
            label-align="left"
          >
            <a-row :gutter="16">
              <a-col :span="6">
                <a-form-item
                  field="number"
                  :label="$t('searchTable.form.number')"
                >
                  <a-input
                    v-model="formModel.number"
                    :placeholder="$t('searchTable.form.number.placeholder')"
                  />
                </a-form-item>
              </a-col>
              <a-col :span="6">
                <a-form-item field="name"  :label="$t('searchTable.form.name')">
                  <a-input
                    v-model="formModel.name"
                    :placeholder="$t('searchTable.form.name.placeholder')"
                  />
                </a-form-item>
              </a-col>
              <a-col :flex="'86px'" style="text-align: right">
          <a-space  :size="18">
            <a-button type="primary" :style="{margin:'0 0 0 20px'}" @click="search">
              <template #icon>
                <icon-search />
              </template>
              {{ $t('searchTable.form.search') }}
            </a-button>
            <a-button @click="reset">
              <template #icon>
                <icon-refresh />
              </template>
              {{ $t('searchTable.form.reset') }}
            </a-button>
          </a-space>
        </a-col>
            </a-row>
          </a-form>
        </a-col>
       
      </a-row>
      <a-divider style="margin-top: 0" />
      <a-row style="margin-bottom: 16px">
        <a-col :span="16">
          <a-space>
            <a-button @click="handleClick()" type="primary">新增</a-button>
            <a-modal width="800px" v-model:visible="visible" @cancel="handleCancel" @ok="handleConfirm($refs,'add')"  unmountOnClose>
              <template #title>
                添加运动员
              </template>
              <div>
                <a-form ref="formRef" :size="form.size" :model="form" :style="{width:'600px'}" @submit="handleSubmit">
                    <a-form-item field="name" label="姓名"
                                 :rules="[{required:true,message:'name is required'},{minLength:2,message:'姓名不能少于两位'}]"
                                 :validate-trigger="['change','input']"
                    >
                      <a-input v-model="form.name" placeholder="请输入你的姓名" />
                    </a-form-item>
                    <a-form-item field="image" label="上传照片">
                      <a-upload draggable action="/" />
                    </a-form-item>
                    <a-form-item field="age" label="年龄"
                                 :rules="[{required:true,message:'age is required'},{type:'number', max:200,message:'age is max than 200'}]"
                    >
                    
                    
                      <a-input-number v-model="form.age" placeholder="请输入你的年龄" />
                    </a-form-item>
                    <a-form-item field="phoneNumber" label="手机号"
                                 :rules="[{required:true,message:'phoneNumber is required'},{minLength:5,message:'不能少于5位数字'}]"
                                 :validate-trigger="['change','input']"
                    >
                      <a-input v-model="form.phoneNumber" placeholder="请输入你的手机号" />
                    </a-form-item>
                    <a-form-item field="section" label="国籍" :rules="[{match:/section one/,message:'must select one'}]">
                      <a-select v-model="form.section" placeholder="请选择国籍" allow-clear>
                        <a-option value="section one">Section One</a-option>
                        <a-option value="section two">Section Two</a-option>
                        <a-option value="section three">Section Three</a-option>
                      </a-select>
                    </a-form-item>
                    <a-form-item field="radio" label="性别" :rules="[{match:/one/,message:'must select one'}]">
                      <a-radio-group v-model="form.radio">
                        <a-radio value="radio one">男</a-radio>
                        <a-radio value="radio two">女</a-radio>
                      </a-radio-group>
                    </a-form-item>
                    <a-form-item field="treeSelect" label="参赛项目">
                      <a-tree-select :data="treeData" v-model="form.treeSelect" placeholder="请选择参赛项目"/>
                    </a-form-item>
                    <a-form-item>
                      <a-space>
                        <!-- <a-button html-type="submit" type="primary">提交</a-button> -->
                        <a-button type="primary" status="danger" @click="$refs.formRef.resetFields()">重置</a-button>
                      </a-space>
                    </a-form-item>
              </a-form>
              </div>
            </a-modal>
            <!-- <a-upload action="/">
              <template #upload-button>
                <a-button>
                  {{ $t('searchTable.operation.import') }}
                </a-button>
              </template>
            </a-upload> -->
          </a-space>
        </a-col>
      </a-row>
      <a-table
        row-key="id"
        :loading="loading"
        :pagination="pagination"
        :data="renderData"
        :bordered="false"
        @page-change="onPageChange"
        :row-selection="rowSelection"
      >
        <template #columns>
          <a-table-column
            @click="handleConsole()"
            :title="$t('searchTable.columns.number')"
            data-index="number"
          />
          <a-table-column
            :title="$t('searchTable.columns.name')"
            data-index="name"
          />
          <a-table-column
            :title="$t('searchTable.columns.contentType')"
            data-index="contentType"
          >
            <template #cell="{ record }">
              <a-space>
                <a-avatar
                  v-if="record.contentType === 'img'"
                  :size="16"
                  shape="square"
                >
                  <img
                    alt="avatar"
                    src="//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/581b17753093199839f2e327e726b157.svg~tplv-49unhts6dw-image.image"
                  />
                </a-avatar>
                <a-avatar
                  v-else-if="record.contentType === 'horizontalVideo'"
                  :size="16"
                  shape="square"
                >
                  <img
                    alt="avatar"
                    src="//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/77721e365eb2ab786c889682cbc721c1.svg~tplv-49unhts6dw-image.image"
                  />
                </a-avatar>
                <a-avatar v-else :size="16" shape="square">
                  <img
                    alt="avatar"
                    src="//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/ea8b09190046da0ea7e070d83c5d1731.svg~tplv-49unhts6dw-image.image"
                  />
                </a-avatar>
                {{ $t(`searchTable.form.contentType.${record.contentType}`) }}
              </a-space>
            </template>
          </a-table-column>
          <a-table-column
            :title="$t('searchTable.columns.filterType1')"
            data-index="filterType"
          >
            <template #cell="{ record }">
              {{ $t(`searchTable.form.filterType.${record.filterType}`) }}
            </template>
          </a-table-column>
          <a-table-column
            :title="$t('searchTable.columns.image')"
            data-index="filterType"
          >
            <template #cell="{ record }">
              {{ $t(`searchTable.form.filterType.${record.filterType}`) }}
            </template>
          </a-table-column>
          <a-table-column
            :title="$t('searchTable.columns.count')"
            data-index="count"
          />
          <a-table-column
            :title="$t('searchTable.columns.createdTime')"
            data-index="createdTime"
          />
          <!-- <a-table-column
            :title="$t('searchTable.columns.status')"
            data-index="status"
          >
            <template #cell="{ record }">
              <span v-if="record.status === 'offline'" class="circle"></span>
              <span v-else class="circle pass"></span>
              {{ $t(`searchTable.form.status.${record.status}`) }}
            </template>
          </a-table-column> -->
          <a-table-column
            :title="$t('searchTable.columns.operations')"
            data-index="operations"
          >
            <template #cell="{ record }">
             <a-button @click="handleClick1(record)" type="text">编辑</a-button>
           
              <a-button v-permission="['admin']" type="text" status="danger" size="small">
                {{ $t('searchTable.columns.operations.delete') }}
              </a-button>
            </template>
          </a-table-column>
        </template>
      </a-table>
      <a-modal width="800px" v-model:visible="showModel" @cancel="handleCancel1" @ok="handleConfirm($refs,'edit')"  unmountOnClose>
              <template #title>
                编辑管理员信息
              </template>
              <div>
                <a-form setFields="" ref="formRef" :size="form.size" :model="form" :style="{width:'600px'}" @submit="handleSubmit">
                    <a-form-item field="name" label="姓名"
                                 :rules="[{required:true,message:'name is required'},{minLength:2,message:'姓名不能少于两位'}]"
                                 :validate-trigger="['change','input']"
                    >
                      <a-input v-model="form.name" placeholder="请输入你的姓名" />
                    </a-form-item>
                    <a-form-item field="image" label="上传照片">
                      <a-upload draggable action="/" />
                    </a-form-item>
                    <a-form-item field="age" label="年龄"
                                 :rules="[{required:true,message:'age is required'},{type:'number', max:200,message:'age is max than 200'}]"
                    >
                    
                    
                      <a-input-number v-model="form.age" placeholder="请输入你的年龄" />
                    </a-form-item>
                    <a-form-item field="phoneNumber" label="手机号"
                                 :rules="[{required:true,message:'phoneNumber is required'},{minLength:5,message:'不能少于5位数字'}]"
                                 :validate-trigger="['change','input']"
                    >
                      <a-input v-model="form.phoneNumber" placeholder="请输入你的手机号" />
                    </a-form-item>
                    <a-form-item field="section" label="国籍" :rules="[{match:/section one/,message:'must select one'}]">
                      <a-select v-model="form.section" placeholder="请选择国籍" allow-clear>
                        <a-option value="section one">Section One</a-option>
                        <a-option value="section two">Section Two</a-option>
                        <a-option value="section three">Section Three</a-option>
                      </a-select>
                    </a-form-item>
                    <a-form-item field="radio" label="性别" :rules="[{match:/one/,message:'must select one'}]">
                      <a-radio-group v-model="form.radio">
                        <a-radio value="radio one">男</a-radio>
                        <a-radio value="radio two">女</a-radio>
                      </a-radio-group>
                    </a-form-item>
                    <a-form-item field="treeSelect" label="参赛项目">
                      <a-tree-select :data="treeData" v-model="form.treeSelect" placeholder="请选择参赛项目"/>
                    </a-form-item>
                    <a-form-item>
                      <a-space>
                        <!-- <a-button html-type="submit" type="primary">提交</a-button> -->
                        <a-button type="primary" status="danger" @click="$refs.formRef.resetFields()">重置</a-button>
                      </a-space>
                    </a-form-item>
              </a-form>
              </div>
      </a-modal>
    </a-card>
    
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, reactive,getCurrentInstance } from 'vue';
import { useI18n } from 'vue-i18n';
import useLoading from '@/hooks/loading';
import { queryPolicyList, PolicyRecord, PolicyParams } from '@/api/list';
import { Pagination, Options } from '@/types/global';
// import { FormInstance } from '@arco-design/web-vue/es/form';
const generateFormModel = () => {
  return {
    number: '',
    name: '',
    contentType: '',
    filterType: '',
    createdTime: [],
    status: '',
  };
};
export default defineComponent({
  setup() {
    const { loading, setLoading } = useLoading(true);
    const { t } = useI18n();
    const renderData = ref<PolicyRecord[]>([]);
    const formModel = ref(generateFormModel());
    const basePagination: Pagination = {
      current: 1,
      pageSize: 20,
    };
    const pagination = reactive({
      ...basePagination,
    });
    const handleConsole = ()=>{
      console.log(1111);
    }
    const {ctx} = getCurrentInstance()
    const contentTypeOptions = computed<Options[]>(() => [
      {
        label: t('searchTable.form.contentType.img'),
        value: 'img',
      },
      {
        label: t('searchTable.form.contentType.horizontalVideo'),
        value: 'horizontalVideo',
      },
      {
        label: t('searchTable.form.contentType.verticalVideo'),
        value: 'verticalVideo',
      },
    ]);
    const filterTypeOptions = computed<Options[]>(() => [
      {
        label: t('searchTable.form.filterType.artificial'),
        value: 'artificial',
      },
      {
        label: t('searchTable.form.filterType.rules'),
        value: 'rules',
      },
    ]);
    const statusOptions = computed<Options[]>(() => [
      {
        label: t('searchTable.form.status.online'),
        value: 'online',
      },
      {
        label: t('searchTable.form.status.offline'),
        value: 'offline',
      },
    ]);
    const visible = ref(false);
    const showModel = ref(false)
    const formRef = ref();
    console.log("formRef",formRef);
    
    const form = reactive({
      size: 'medium',
      name: '',
      image:'',
      age: undefined,
      section: '',
      province: 'haidian',
      options: [],
      radio: 'radio one',
      switch: false,
      multiSelect: ['section one'],
      treeSelect: '',
      phoneNumber:''
    });
    console.log('ctx',ctx);

    const handleClick = () => {
      visible.value = true;
      ctx.$nextTick(() => {
                Object.assign(form, {
                    size: 'medium',
                    name: '',
                    image:'',
                    age: undefined,
                    section: '',
                    province: 'haidian',
                    options: [],
                    radio: 'radio one',
                    switch: false,
                    multiSelect: ['section one'],
                    treeSelect: '',
                    phoneNumber:''
                });
            });
      // formRef1.value?.validate();
    };
    
    const handleClick1 = (row) => {
      showModel.value = true;
      ctx.$nextTick(() => {
        Object.assign(form, row);
      });
      // console.log(form.value);
      
      // console.log('row.value',row);
      
    };
    const rowSelection = reactive({
      type: 'checkbox',
      showCheckedAll: true,
      onlyCurrent: false,
    });
    // const handleBeforeOk = async () => {
    //   await new Promise(resolve => setTimeout(resolve, 3000));
    //   return true;
    // };
    const handleCancel = () => {
      visible.value = false;
      ctx.$nextTick(() => {
                Object.assign(form, {
                    size: 'medium',
                    name: '',
                    image:'',
                    age: undefined,
                    section: '',
                    province: 'haidian',
                    options: [],
                    radio: 'radio one',
                    switch: false,
                    multiSelect: ['section one'],
                    treeSelect: '',
                    phoneNumber:''
                });
            });
    }
    const handleCancel1 = () => {
      showModel.value = false;
      ctx.$nextTick(() => {
                Object.assign(form, {
                    size: 'medium',
                    name: '',
                    image:'',
                    age: undefined,
                    section: '',
                    province: 'haidian',
                    options: [],
                    radio: 'radio one',
                    switch: false,
                    multiSelect: ['section one'],
                    treeSelect: '',
                    phoneNumber:''
                });
            });
    }
    const handleSubmit = ({values, errors}) => {
      console.log('values:', values, '\nerrors:', errors)
    }
    const handleConfirm = ($ref,type)=> {
      /* eslint-disable */

      $ref.formRef.validate((valid)=>{

        if(type==='edit') {
            if(!valid ) {
              showModel.value = false
              $ref.formRef.resetFields()
            }else {
              showModel.value = true
            }
        } else {
            if(!valid ) {
              visible.value = false
              $ref.formRef.resetFields()
            }else {
              visible.value = true
            }
        }
        
      })
      
      
    }
   
    const options = [
      {
        value: 'beijing',
        label: 'Beijing',
        children: [
          {
            value: 'chaoyang',
            label: 'ChaoYang',
            children: [
              {
                value: 'datunli',
                label: 'Datunli',
              },
            ],
          },
          {
            value: 'haidian',
            label: 'Haidian',
          },
          {
            value: 'dongcheng',
            label: 'Dongcheng',
          },
          {
            value: 'xicheng',
            label: 'XiCheng',
          },
        ],
      },
      {
        value: 'shanghai',
        label: 'Shanghai',
        children: [
          {
            value: 'shanghaishi',
            label: 'Shanghai',
            children: [
              {
                value: 'huangpu',
                label: 'Huangpu',
              },
            ],
          },
        ],
      },
    ];
    const treeData = [
      {
        key: 'node1',
        title: 'Node1',
        children: [
          {
            key: 'node2',
            title: 'Node2',
          },
        ],
      },
      {
        key: 'node3',
        title: 'Node3',
        children: [
          {
            key: 'node4',
            title: 'Node4',
          },
          {
            key: 'node5',
            title: 'Node5',
          },
        ],
      },
    ]
    const fetchData = async (
      params: PolicyParams = { current: 1, pageSize: 20 }
    ) => {
      setLoading(true);
      try {
        const { data } = await queryPolicyList(params);
        renderData.value = data.list;
        pagination.current = params.current;
        pagination.total = data.total;
      } catch (err) {
        // you can report use errorHandler or other
      } finally {
        setLoading(false);
      }
    };
    
    const search = () => {
      
      fetchData({
        ...basePagination,
        ...formModel.value,
      } as unknown as PolicyParams);
    };
    const onPageChange = (current: number) => {
      fetchData({ ...basePagination, current });
    };

    fetchData();
    const reset = () => {
      formModel.value = generateFormModel();
    };
    return {
      loading,
      search,
      onPageChange,
      renderData,
      pagination,
      formModel,
      reset,
      contentTypeOptions,
      filterTypeOptions,
      statusOptions,
      visible,
      showModel,
      handleClick,
      handleCancel,
      form,
      options,
      treeData,
      handleSubmit,
      handleCancel1,
      handleClick1,
      handleConsole,
      rowSelection,
      formRef,
      handleConfirm
    };
  },
});
</script>

<style scoped lang="less">
:deep(.arco-table-th) {
  &:last-child {
    .arco-table-th-item-title {
      margin-left: 16px;
    }
  }
}
</style>