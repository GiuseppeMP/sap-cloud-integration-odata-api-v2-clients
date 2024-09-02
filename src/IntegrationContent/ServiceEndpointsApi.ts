/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ServiceEndpoints } from './ServiceEndpoints';
import { ServiceEndpointsRequestBuilder } from './ServiceEndpointsRequestBuilder';
import { EntryPointsApi } from './EntryPointsApi';
import { ApiDefinitionsApi } from './ApiDefinitionsApi';
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
export class ServiceEndpointsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ServiceEndpoints<DeSerializersT>, DeSerializersT>
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
  ): ServiceEndpointsApi<DeSerializersT> {
    return new ServiceEndpointsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link entryPoints} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENTRY_POINTS: Link<
      ServiceEndpoints<DeSerializersT>,
      DeSerializersT,
      EntryPointsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link apiDefinitions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    API_DEFINITIONS: Link<
      ServiceEndpoints<DeSerializersT>,
      DeSerializersT,
      ApiDefinitionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link customTags} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOM_TAGS: Link<
      ServiceEndpoints<DeSerializersT>,
      DeSerializersT,
      CustomTagsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      EntryPointsApi<DeSerializersT>,
      ApiDefinitionsApi<DeSerializersT>,
      CustomTagsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ENTRY_POINTS: new Link('EntryPoints', this, linkedApis[0]),
      API_DEFINITIONS: new Link('ApiDefinitions', this, linkedApis[1]),
      CUSTOM_TAGS: new Link('CustomTags', this, linkedApis[2])
    };
    return this;
  }

  entityConstructor = ServiceEndpoints;

  requestBuilder(): ServiceEndpointsRequestBuilder<DeSerializersT> {
    return new ServiceEndpointsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ServiceEndpoints<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ServiceEndpoints<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ServiceEndpoints<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ServiceEndpoints, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ServiceEndpoints,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    NAME: OrderableEdmTypeField<
      ServiceEndpoints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ID: OrderableEdmTypeField<
      ServiceEndpoints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TITLE: OrderableEdmTypeField<
      ServiceEndpoints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VERSION: OrderableEdmTypeField<
      ServiceEndpoints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SUMMARY: OrderableEdmTypeField<
      ServiceEndpoints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      ServiceEndpoints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LAST_UPDATED: OrderableEdmTypeField<
      ServiceEndpoints<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    PROTOCOL: OrderableEdmTypeField<
      ServiceEndpoints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link entryPoints} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENTRY_POINTS: Link<
      ServiceEndpoints<DeSerializersT>,
      DeSerializersT,
      EntryPointsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link apiDefinitions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    API_DEFINITIONS: Link<
      ServiceEndpoints<DeSerializersT>,
      DeSerializersT,
      ApiDefinitionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link customTags} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOM_TAGS: Link<
      ServiceEndpoints<DeSerializersT>,
      DeSerializersT,
      CustomTagsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ServiceEndpoints<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link id} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ID: fieldBuilder.buildEdmTypeField('Id', 'Edm.String', false),
        /**
         * Static representation of the {@link title} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TITLE: fieldBuilder.buildEdmTypeField('Title', 'Edm.String', false),
        /**
         * Static representation of the {@link version} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VERSION: fieldBuilder.buildEdmTypeField('Version', 'Edm.String', false),
        /**
         * Static representation of the {@link summary} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUMMARY: fieldBuilder.buildEdmTypeField('Summary', 'Edm.String', false),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lastUpdated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_UPDATED: fieldBuilder.buildEdmTypeField(
          'LastUpdated',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link protocol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROTOCOL: fieldBuilder.buildEdmTypeField(
          'Protocol',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ServiceEndpoints)
      };
    }

    return this._schema;
  }
}
