/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { IdempotentRepositoryEntries } from './IdempotentRepositoryEntries';
import { IdempotentRepositoryEntriesRequestBuilder } from './IdempotentRepositoryEntriesRequestBuilder';
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
export class IdempotentRepositoryEntriesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<IdempotentRepositoryEntries<DeSerializersT>, DeSerializersT>
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
  ): IdempotentRepositoryEntriesApi<DeSerializersT> {
    return new IdempotentRepositoryEntriesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = IdempotentRepositoryEntries;

  requestBuilder(): IdempotentRepositoryEntriesRequestBuilder<DeSerializersT> {
    return new IdempotentRepositoryEntriesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    IdempotentRepositoryEntries<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      IdempotentRepositoryEntries<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    IdempotentRepositoryEntries<DeSerializersT>,
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
    typeof IdempotentRepositoryEntries,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        IdempotentRepositoryEntries,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    HEX_SOURCE: OrderableEdmTypeField<
      IdempotentRepositoryEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    HEX_ENTRY: OrderableEdmTypeField<
      IdempotentRepositoryEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SOURCE: OrderableEdmTypeField<
      IdempotentRepositoryEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENTRY: OrderableEdmTypeField<
      IdempotentRepositoryEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPONENT: OrderableEdmTypeField<
      IdempotentRepositoryEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATION_TIME: OrderableEdmTypeField<
      IdempotentRepositoryEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    EXPIRATION_TIME: OrderableEdmTypeField<
      IdempotentRepositoryEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    ALL_FIELDS: AllFields<IdempotentRepositoryEntries<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
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
        ALL_FIELDS: new AllFields('*', IdempotentRepositoryEntries)
      };
    }

    return this._schema;
  }
}
