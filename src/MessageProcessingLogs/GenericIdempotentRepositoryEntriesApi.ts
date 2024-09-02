/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { GenericIdempotentRepositoryEntries } from './GenericIdempotentRepositoryEntries';
import { GenericIdempotentRepositoryEntriesRequestBuilder } from './GenericIdempotentRepositoryEntriesRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v2';
export class GenericIdempotentRepositoryEntriesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      GenericIdempotentRepositoryEntries<DeSerializersT>,
      DeSerializersT
    >
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
  ): GenericIdempotentRepositoryEntriesApi<DeSerializersT> {
    return new GenericIdempotentRepositoryEntriesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = GenericIdempotentRepositoryEntries;

  requestBuilder(): GenericIdempotentRepositoryEntriesRequestBuilder<DeSerializersT> {
    return new GenericIdempotentRepositoryEntriesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    GenericIdempotentRepositoryEntries<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      GenericIdempotentRepositoryEntries<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    GenericIdempotentRepositoryEntries<DeSerializersT>,
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
    typeof GenericIdempotentRepositoryEntries,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        GenericIdempotentRepositoryEntries,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    HEX_VENDOR: OrderableEdmTypeField<
      GenericIdempotentRepositoryEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    HEX_SOURCE: OrderableEdmTypeField<
      GenericIdempotentRepositoryEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    HEX_ENTRY: OrderableEdmTypeField<
      GenericIdempotentRepositoryEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    HEX_COMPONENT: OrderableEdmTypeField<
      GenericIdempotentRepositoryEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SOURCE: OrderableEdmTypeField<
      GenericIdempotentRepositoryEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENTRY: OrderableEdmTypeField<
      GenericIdempotentRepositoryEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPONENT: OrderableEdmTypeField<
      GenericIdempotentRepositoryEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR: OrderableEdmTypeField<
      GenericIdempotentRepositoryEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATION_TIME: OrderableEdmTypeField<
      GenericIdempotentRepositoryEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    EXPIRATION_TIME: OrderableEdmTypeField<
      GenericIdempotentRepositoryEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    ALL_FIELDS: AllFields<GenericIdempotentRepositoryEntries<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link hexVendor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEX_VENDOR: fieldBuilder.buildEdmTypeField(
          'HexVendor',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link hexSource} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEX_SOURCE: fieldBuilder.buildEdmTypeField(
          'HexSource',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link hexEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEX_ENTRY: fieldBuilder.buildEdmTypeField(
          'HexEntry',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link hexComponent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEX_COMPONENT: fieldBuilder.buildEdmTypeField(
          'HexComponent',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link source} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE: fieldBuilder.buildEdmTypeField('Source', 'Edm.String', true),
        /**
         * Static representation of the {@link entry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENTRY: fieldBuilder.buildEdmTypeField('Entry', 'Edm.String', true),
        /**
         * Static representation of the {@link component} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPONENT: fieldBuilder.buildEdmTypeField(
          'Component',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR: fieldBuilder.buildEdmTypeField('Vendor', 'Edm.String', true),
        /**
         * Static representation of the {@link creationTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATION_TIME: fieldBuilder.buildEdmTypeField(
          'CreationTime',
          'Edm.Int64',
          true
        ),
        /**
         * Static representation of the {@link expirationTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPIRATION_TIME: fieldBuilder.buildEdmTypeField(
          'ExpirationTime',
          'Edm.Int64',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', GenericIdempotentRepositoryEntries)
      };
    }

    return this._schema;
  }
}
