/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { IntegrationPackages } from './IntegrationPackages';
import { IntegrationPackagesRequestBuilder } from './IntegrationPackagesRequestBuilder';
import { IntegrationDesigntimeArtifactsApi } from './IntegrationDesigntimeArtifactsApi';
import { ValueMappingDesigntimeArtifactsApi } from './ValueMappingDesigntimeArtifactsApi';
import { MessageMappingDesigntimeArtifactsApi } from './MessageMappingDesigntimeArtifactsApi';
import { CustomTagsApi } from './CustomTagsApi';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  Link
} from '@sap-cloud-sdk/odata-v2';
export class IntegrationPackagesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<IntegrationPackages<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): IntegrationPackagesApi<DeSerializersT> {
    return new IntegrationPackagesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link integrationDesigntimeArtifacts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INTEGRATION_DESIGNTIME_ARTIFACTS: Link<
      IntegrationPackages<DeSerializersT>,
      DeSerializersT,
      IntegrationDesigntimeArtifactsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link valueMappingDesigntimeArtifacts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VALUE_MAPPING_DESIGNTIME_ARTIFACTS: Link<
      IntegrationPackages<DeSerializersT>,
      DeSerializersT,
      ValueMappingDesigntimeArtifactsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link messageMappingDesigntimeArtifacts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MESSAGE_MAPPING_DESIGNTIME_ARTIFACTS: Link<
      IntegrationPackages<DeSerializersT>,
      DeSerializersT,
      MessageMappingDesigntimeArtifactsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link customTags} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOM_TAGS: Link<
      IntegrationPackages<DeSerializersT>,
      DeSerializersT,
      CustomTagsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      IntegrationDesigntimeArtifactsApi<DeSerializersT>,
      ValueMappingDesigntimeArtifactsApi<DeSerializersT>,
      MessageMappingDesigntimeArtifactsApi<DeSerializersT>,
      CustomTagsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      INTEGRATION_DESIGNTIME_ARTIFACTS: new Link(
        'IntegrationDesigntimeArtifacts',
        this,
        linkedApis[0]
      ),
      VALUE_MAPPING_DESIGNTIME_ARTIFACTS: new Link(
        'ValueMappingDesigntimeArtifacts',
        this,
        linkedApis[1]
      ),
      MESSAGE_MAPPING_DESIGNTIME_ARTIFACTS: new Link(
        'MessageMappingDesigntimeArtifacts',
        this,
        linkedApis[2]
      ),
      CUSTOM_TAGS: new Link('CustomTags', this, linkedApis[3])
    };
    return this;
  }

  entityConstructor = IntegrationPackages;

  requestBuilder(): IntegrationPackagesRequestBuilder<DeSerializersT> {
    return new IntegrationPackagesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    IntegrationPackages<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<IntegrationPackages<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    IntegrationPackages<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof IntegrationPackages,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        IntegrationPackages,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ID: OrderableEdmTypeField<
      IntegrationPackages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      IntegrationPackages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      IntegrationPackages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHORT_TEXT: OrderableEdmTypeField<
      IntegrationPackages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VERSION: OrderableEdmTypeField<
      IntegrationPackages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR: OrderableEdmTypeField<
      IntegrationPackages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MODE: OrderableEdmTypeField<
      IntegrationPackages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUPPORTED_PLATFORM: OrderableEdmTypeField<
      IntegrationPackages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MODIFIED_BY: OrderableEdmTypeField<
      IntegrationPackages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATION_DATE: OrderableEdmTypeField<
      IntegrationPackages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MODIFIED_DATE: OrderableEdmTypeField<
      IntegrationPackages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATED_BY: OrderableEdmTypeField<
      IntegrationPackages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCTS: OrderableEdmTypeField<
      IntegrationPackages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    KEYWORDS: OrderableEdmTypeField<
      IntegrationPackages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTRIES: OrderableEdmTypeField<
      IntegrationPackages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INDUSTRIES: OrderableEdmTypeField<
      IntegrationPackages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_OF_BUSINESS: OrderableEdmTypeField<
      IntegrationPackages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link integrationDesigntimeArtifacts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INTEGRATION_DESIGNTIME_ARTIFACTS: Link<
      IntegrationPackages<DeSerializersT>,
      DeSerializersT,
      IntegrationDesigntimeArtifactsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link valueMappingDesigntimeArtifacts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VALUE_MAPPING_DESIGNTIME_ARTIFACTS: Link<
      IntegrationPackages<DeSerializersT>,
      DeSerializersT,
      ValueMappingDesigntimeArtifactsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link messageMappingDesigntimeArtifacts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MESSAGE_MAPPING_DESIGNTIME_ARTIFACTS: Link<
      IntegrationPackages<DeSerializersT>,
      DeSerializersT,
      MessageMappingDesigntimeArtifactsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link customTags} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOM_TAGS: Link<
      IntegrationPackages<DeSerializersT>,
      DeSerializersT,
      CustomTagsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<IntegrationPackages<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link id} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ID: fieldBuilder.buildEdmTypeField('Id', 'Edm.String', false),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shortText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHORT_TEXT: fieldBuilder.buildEdmTypeField(
          'ShortText',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link version} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VERSION: fieldBuilder.buildEdmTypeField('Version', 'Edm.String', true),
        /**
         * Static representation of the {@link vendor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR: fieldBuilder.buildEdmTypeField('Vendor', 'Edm.String', true),
        /**
         * Static representation of the {@link mode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MODE: fieldBuilder.buildEdmTypeField('Mode', 'Edm.String', true),
        /**
         * Static representation of the {@link supportedPlatform} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUPPORTED_PLATFORM: fieldBuilder.buildEdmTypeField(
          'SupportedPlatform',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link modifiedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MODIFIED_BY: fieldBuilder.buildEdmTypeField(
          'ModifiedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link creationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATION_DATE: fieldBuilder.buildEdmTypeField(
          'CreationDate',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link modifiedDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MODIFIED_DATE: fieldBuilder.buildEdmTypeField(
          'ModifiedDate',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link createdBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_BY: fieldBuilder.buildEdmTypeField(
          'CreatedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link products} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTS: fieldBuilder.buildEdmTypeField(
          'Products',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link keywords} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KEYWORDS: fieldBuilder.buildEdmTypeField(
          'Keywords',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link countries} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRIES: fieldBuilder.buildEdmTypeField(
          'Countries',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link industries} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INDUSTRIES: fieldBuilder.buildEdmTypeField(
          'Industries',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lineOfBusiness} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_OF_BUSINESS: fieldBuilder.buildEdmTypeField(
          'LineOfBusiness',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', IntegrationPackages)
      };
    }

    return this._schema;
  }
}
