/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AuthorizedUsers } from './AuthorizedUsers';
import { AuthorizedUsersRequestBuilder } from './AuthorizedUsersRequestBuilder';
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
export class AuthorizedUsersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<AuthorizedUsers<DeSerializersT>, DeSerializersT>
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
  ): AuthorizedUsersApi<DeSerializersT> {
    return new AuthorizedUsersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = AuthorizedUsers;

  requestBuilder(): AuthorizedUsersRequestBuilder<DeSerializersT> {
    return new AuthorizedUsersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AuthorizedUsers<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<AuthorizedUsers<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<AuthorizedUsers<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof AuthorizedUsers, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AuthorizedUsers,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    USER: OrderableEdmTypeField<
      AuthorizedUsers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PID: OrderableEdmTypeField<
      AuthorizedUsers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LAST_MODIFIED_BY: OrderableEdmTypeField<
      AuthorizedUsers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_MODIFIED_TIME: OrderableEdmTypeField<
      AuthorizedUsers<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    CREATED_BY: OrderableEdmTypeField<
      AuthorizedUsers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATED_TIME: OrderableEdmTypeField<
      AuthorizedUsers<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    ALL_FIELDS: AllFields<AuthorizedUsers<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link user} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER: fieldBuilder.buildEdmTypeField('User', 'Edm.String', false),
        /**
         * Static representation of the {@link pid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PID: fieldBuilder.buildEdmTypeField('Pid', 'Edm.String', false),
        /**
         * Static representation of the {@link lastModifiedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_MODIFIED_BY: fieldBuilder.buildEdmTypeField(
          'LastModifiedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lastModifiedTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_MODIFIED_TIME: fieldBuilder.buildEdmTypeField(
          'LastModifiedTime',
          'Edm.DateTime',
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
         * Static representation of the {@link createdTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_TIME: fieldBuilder.buildEdmTypeField(
          'CreatedTime',
          'Edm.DateTime',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AuthorizedUsers)
      };
    }

    return this._schema;
  }
}
