/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DataStores } from './DataStores';
import { DataStoresRequestBuilder } from './DataStoresRequestBuilder';
import { DataStoreEntriesApi } from './DataStoreEntriesApi';
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
export class DataStoresApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<DataStores<DeSerializersT>, DeSerializersT>
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
  ): DataStoresApi<DeSerializersT> {
    return new DataStoresApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link entries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENTRIES: Link<
      DataStores<DeSerializersT>,
      DeSerializersT,
      DataStoreEntriesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [DataStoreEntriesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      ENTRIES: new Link('Entries', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = DataStores;

  requestBuilder(): DataStoresRequestBuilder<DeSerializersT> {
    return new DataStoresRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    DataStores<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<DataStores<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<DataStores<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof DataStores, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(DataStores, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_STORE_NAME: OrderableEdmTypeField<
      DataStores<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INTEGRATION_FLOW: OrderableEdmTypeField<
      DataStores<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TYPE: OrderableEdmTypeField<
      DataStores<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VISIBILITY: OrderableEdmTypeField<
      DataStores<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NUMBER_OF_MESSAGES: OrderableEdmTypeField<
      DataStores<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    NUMBER_OF_OVERDUE_MESSAGES: OrderableEdmTypeField<
      DataStores<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link entries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENTRIES: Link<
      DataStores<DeSerializersT>,
      DeSerializersT,
      DataStoreEntriesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<DataStores<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link dataStoreName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_STORE_NAME: fieldBuilder.buildEdmTypeField(
          'DataStoreName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link integrationFlow} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTEGRATION_FLOW: fieldBuilder.buildEdmTypeField(
          'IntegrationFlow',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEdmTypeField('Type', 'Edm.String', false),
        /**
         * Static representation of the {@link visibility} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VISIBILITY: fieldBuilder.buildEdmTypeField(
          'Visibility',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link numberOfMessages} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_OF_MESSAGES: fieldBuilder.buildEdmTypeField(
          'NumberOfMessages',
          'Edm.Int64',
          true
        ),
        /**
         * Static representation of the {@link numberOfOverdueMessages} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_OF_OVERDUE_MESSAGES: fieldBuilder.buildEdmTypeField(
          'NumberOfOverdueMessages',
          'Edm.Int64',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DataStores)
      };
    }

    return this._schema;
  }
}
